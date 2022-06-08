import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

import './App.css';
import { add, sub } from './store/action';

function App() {
  let count=useSelector((state)=>state.count);
  const [value, setvalue] = useState(0);
  const dispatch=useDispatch();
  return (
    <div className="App">
      
      <h2>Count:{count}</h2>
      <button onClick={()=>dispatch(sub)}>-</button>
      <button onClick={()=>dispatch(add)}>+</button>

      <input type='number'  onChange={(e)=>setvalue(e.target.value)}/>
      <button  onClick={()=>dispatch({type:"addval",payload:Number(value)})}>Add</button>
      <button  onClick={()=>dispatch({type:"subval",payload:Number(value)})}>Sub</button>
      <button  onClick={()=>dispatch({type:"mulval",payload:Number(value)})}>Multy</button>
      <button  onClick={()=>dispatch({type:"divval",payload:Number(value)})}>Div</button>
    </div>
  );
}

export default App;

