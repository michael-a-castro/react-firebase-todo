import React, {useSate} from 'react';
import './Todo.css';
import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

function Todo(props) {  
    const useStyles = makeStyles((theme) => ({
        paper: { 
            postision: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2pt solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2,4,3)
        }
    }))
    const classes = useStyles()
    const [input, setInput] = React.useState();
    const [open, setOpen] = React.useState(false);
    
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set ({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Edit you item</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/> 
                <Button type='submit' onClick={updateTodo}>update</Button>
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
