import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // function to change count according to its type +,0,-
  function handleClick(type) {
    switch (type) {
      // if the button pressed is + then count will increase
      case "+":
        setCount(count + 1)
        break;

      // if the button pressed is - then count will decrease
      case "-":
        setCount(count - 1)
        break;

      // else, return to initial state
      default:
        setCount(0)
        break;
    }
  }

  // (inline) Button component
  function Button(props) {
    // conditional rendering, style button according to its type
    let style;
    switch (props.type) {
      case "+":
        style = {background: "green"}
        break;
      case "-":
        style = {background: "red"}
        break;
      default:
        break;
    }

    return (
      <div>
        <button onClick={()=>handleClick(props.type)} style={style} className="btn">{props.type}</button>
      </div>
    )
  }

  // App return statement
  return (
    <div className="App">
      {/* display count, and style it */}
      <h1 style={count===0? {color: "black"}: (count>0? {color:"green"}: {color: "red"})}>{count}</h1>

      {/* div that contains 3 components, and passing their props */}
      <div className="buttons">
        <Button type="+"/>
        <Button type="0"/>
        <Button type="-"/>
      </div>
    </div>
  );
}



export default App;
