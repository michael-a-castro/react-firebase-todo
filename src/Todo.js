import React from 'react';
import './Todo.css';
import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.text} secondary='placeholder' />
            </ListItem>
        </List>
    )
}

export default Todo
