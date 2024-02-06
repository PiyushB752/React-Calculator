import React, { useState } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState(' ')
  const inputFunc = (val) => {
    if (val==="Del") {
      setInput((e) => e.slice(0, -1));
    } else if(val==="="){
      setInput(eval(input).toString());
    } else if(val==="AC"){
      setInput('')
    } else{
      setInput((e)=>e+val)
    }
  };
  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          <input type="text" readOnly className='input' value={input}/>
        </div>
        <div className='buttons'>
          <button className='btn' onClick={()=>inputFunc("Del")}>Del</button>
          <button className='btn' onClick={()=>inputFunc("=")}>=</button>
          <button className='btn' onClick={()=>inputFunc("AC")}>AC</button>
          <button className='btn' onClick={()=>inputFunc("1")}>1</button>
          <button className='btn' onClick={()=>inputFunc("2")}>2</button>
          <button className='btn' onClick={()=>inputFunc("3")}>3</button>
          <button className='btn' onClick={()=>inputFunc("4")}>4</button>
          <button className='btn' onClick={()=>inputFunc("5")}>5</button>
          <button className='btn' onClick={()=>inputFunc("6")}>6</button>
          <button className='btn' onClick={()=>inputFunc("7")}>7</button>
          <button className='btn' onClick={()=>inputFunc("8")}>8</button>
          <button className='btn' onClick={()=>inputFunc("9")}>9</button>
          <button className='btn' onClick={()=>inputFunc("+")}>+</button>
          <button className='btn' onClick={()=>inputFunc("0")}>0</button>
          <button className='btn' onClick={()=>inputFunc("-")}>-</button>
          <button className='btn' onClick={()=>inputFunc("*")}>*</button>
          <br />
          <button className='btn' onClick={()=>inputFunc("/")}>/</button>
        </div>
      </div>
    </div>
  )
}

export default App
