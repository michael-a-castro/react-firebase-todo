import React, {useState} from 'react';
import { Button } from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the trash out']);
  const [input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    //fires when add todo button is clicked
    event.preventDefault() //prevent default refresh
    setTodos([...todos, input]);
    setInput('') //clears the input after clicking todo button to submit
  }
  return (
   <div className="App" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%'}}>
    <form>
        <input value={input} onChange={event => setInput(event.target.value)}></input>
        <Button type='submit' variant="contained" onClick={addTodo} color="primary">
          Add Todo
          </Button>

        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
    </form>
   </div>  
  )
}

export default App;
