import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //on app load, listen to the db and fetch new todos with updates
  useEffect(() => {
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //fires when add todo button is clicked
    event.preventDefault() //prevent default refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('') //clears the input after clicking todo button to submit
  }

  return (
   <div className='App'>
    <h1 style={{display: 'flex', justifyContent: 'center'}}>Todo App Created Using React, Firebase & Material UI</h1> 
    <form style={{display: 'flex', justifyContent: 'center'}}>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type='submit' variant="contained" onClick={addTodo} color="primary" disabled={!input}>Add Todo</Button>
    </form>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ul>
            {todos.map(todo => (<Todo todo={todo}/>))}
      </ul>
    </div>
   </div>  
  )
}

export default App;
