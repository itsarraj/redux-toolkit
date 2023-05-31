import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {addTodo} from "../../redux/actions/todoActions";

import { actions } from '../../redux/reducers/todoReducer';

import './ToDoForm.css';
import {
    notiSelector,
    resetNotification,
} from '../../redux/reducers/notiReducer';

function ToDoForm() {
    const [todoText, setTodoText] = useState('');
    const disptach = useDispatch();
    const message = useSelector(notiSelector);

    if (message) {
        setTimeout(() => {
            disptach(resetNotification());
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoText('');
        console.log(todoText);
        disptach(actions.addTodo(todoText));
    };

    return (
        <div className="container">
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <button className="btn btn-success float-end" type="submit">
                    Create Todo
                </button>
            </form>
        </div>
    );
}

export default ToDoForm;
