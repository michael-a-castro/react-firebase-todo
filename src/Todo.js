import React from 'react';
import './Todo.css';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='placeholder' />
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </List>
    )
}

export default Todo
