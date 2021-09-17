
import React from "react";
import Card from "./components/Card"
function App(){

function refresh(){
  window.location.reload(false);
}
  return (
    <div className="app">
      <h1>React App with Images and Text</h1>
      <button className="refresh" onClick={refresh}>Refresh</button>
      <div className="cardContainer" id="top">
        <Card/>
      </div>
    </div>
  );
}

export default App;
 