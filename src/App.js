import React, {useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';

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
   <div className="App">
    <h1>Todo App Created Using React!</h1> 
    <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}></input> */}

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type='submit' variant="contained" onClick={addTodo} color="primary" disabled={!input}>
          Add Todo
          </Button>
        <ul>
          {todos.map(todo => (
            <Todo text={todo}/>
          ))}
        </ul>
    </form>
   </div>  
  )
}

export default App;
