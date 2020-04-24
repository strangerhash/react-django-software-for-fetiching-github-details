/*import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class menu extends Component{
  
    render(){
      return
        (
        <div className="menu">
          <p>common</p>
        </div>
         );

}
}*/

function tick() {
  const element2 = (
    <div className="Header" >
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  
}

setInterval(tick, 1000);
  


export default menu;


