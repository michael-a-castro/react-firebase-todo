import React, {useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //on app load, listen to the db and fetch new todos with updates
  useEffect(() => {
    //this code fires when app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    //fires when add todo button is clicked
    event.preventDefault() //prevent default refresh
    setTodos([...todos, input]);
    setInput('') //clears the input after clicking todo button to submit
  }
  return (
   <div className="App">
    <h1>Todo App Created Using React & Material UI</h1> 
    <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type='submit' variant="contained" onClick={addTodo} color="primary" disabled={!input}>Add Todo</Button>

        <ul>
          {todos.map(todo => (<Todo text={todo}/>))}
        </ul>
    </form>
   </div>  
  )
}

export default App;
