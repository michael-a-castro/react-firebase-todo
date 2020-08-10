import React, {useSate} from 'react';
import './Todo.css';
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div>
                <h1>I am a Modal</h1>
                <button onClick={e=>setOpen(false)}></button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='placeholder' />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo
