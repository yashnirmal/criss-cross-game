import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="body-class" style={{width:"100vw",height:"100vh",backgroundColor:"brown"}}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
