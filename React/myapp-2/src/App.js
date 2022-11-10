import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import CountDisplay from './countDisplay';
import  {DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';



function App() {


const [count, setCount] = useState(0);
// setCount(2);



  function functionName(param1) {
    console.log("Hello, World!", param1);
    setCount(count + 1);
  }



  return (
    <div>
      <button onClick={() => functionName("yo")}>Click me!</button>
      <h1>{count}</h1>
      <CountDisplay myCount = {count}/>
      <DayPicker/>
    </div>
  );
}

export default App;
