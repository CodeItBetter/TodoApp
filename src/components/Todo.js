import './Todo.css';
import Form from './Form';
import TodoList from './Todo-list';
import { useState, useEffect } from 'react';

const Todo = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    console.log(todoList);
    useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    return(
        <div className="todo">
            <h1>Todo List</h1>
            <Form input={input} setInput={setInput} todoList={todoList} 
            setTodoList={setTodoList} editTodo={editTodo} setEditTodo={setEditTodo} />
            <TodoList todoList={todoList} setTodoList={setTodoList} 
             setEditTodo={setEditTodo} />
        </div>
    )
}

export default Todo;