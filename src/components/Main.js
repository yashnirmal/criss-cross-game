import { Button, TextField } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import CCBlock from './CCBlock';
import "./Main.css";
import mSocket from './MySocket.js';
import {useSelector,useDispatch} from "react-redux";
import { joinRoom } from '../redux/action/action';


export default function Main() {
  
  const [playerId,setPlayerId]= useState('');
  const mState = useSelector(state=>state);
  console.log(mState.joinRoomReducer);
  const dispatch= useDispatch();

  function enterARoom(){
    let roomCode = document.querySelector('.room-code-input').value;
    dispatch(joinRoom(roomCode));
    mSocket.emit("join-room",roomCode);
  }

  mSocket.on("connect",()=>{
    mSocket.emit("join-room",mSocket.id);
    dispatch(joinRoom(mSocket.id))
    setPlayerId(mSocket.id);
  });


  return (
    <div className='main-div'>
        <div className='new-game-div'>
            <input className='room-code-input' type="text" placeholder='Enter room code' />
            <br />
            <button className='Button' onClick={enterARoom}>Enter the room</button>
            <span style={{marginTop:20}}>Your Room Id : {playerId}</span>
        </div>
        <div className='game-block'>
          <CCBlock />
        </div>
        <div className='score-div'>

        </div>
    </div>
  )
}
