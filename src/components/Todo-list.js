import './Todo-list.css';
import { Fragment } from 'react';

const TodoList = ({todoList, setTodoList, setEditTodo}) => {
    
    const deleteHandler = (todo) =>{
        setTodoList(todoList.filter(todoItem => todoItem.id !== todo.id));
    }

    const checkHandler = (todo) =>{
        const modifiedTodo = todoList.map((todoItem) => {
            return (todoItem.id === todo.id) ? 
            { ...todoItem, completed: !todoItem.completed} : todoItem;
        });
        setTodoList(modifiedTodo);
    }

    const editHandler = (todo) =>{
        const editTodo = todoList.find(todoItem => todoItem.id === todo.id);
        console.log(editTodo);
        setEditTodo(editTodo);
    }
    return(
        <Fragment>
            {todoList.map(todo => {
                const { id, title, completed } = todo;
                return(
                    <div key={id} className="todo-list">
                        <p className={`${completed && "strikethrough"} default-para`}>{title}</p>
                        <div className="todo-icons">
                            <button onClick={() => checkHandler(todo)}>
                                <i className="fa-regular fa-circle-check"></i>
                            </button>
                            <button onClick={() => editHandler(todo)}>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button onClick={() => deleteHandler(todo)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default TodoList;