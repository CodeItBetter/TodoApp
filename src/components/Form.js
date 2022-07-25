import './Form.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const Form = ({input, setInput, todoList, setTodoList, editTodo, setEditTodo}) => {
    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput('');
        }
    }, [editTodo, setInput]);
    const changeHandler = (e) =>{
        setInput(e.target.value);
    }

    const updateTodo = (title, id, completed) =>{
        const newTodo = todoList.map(todo => {
            return (todo.id === id) ? {title, id, completed} : todo;
        });
        setTodoList(newTodo);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(!editTodo){
            setTodoList(() =>{
                return [...todoList, {title: input, id: uuidv4(), completed: false}]
            });
            setInput('');
        }else{
            updateTodo(input, editTodo.id, editTodo.completed);
            setEditTodo(null);
        }
       
        
    }
    return(
        <form onSubmit={submitHandler} className="form">
            <input type="text" onChange={changeHandler} 
            placeholder="Enter your todo's" value={input} />
            <button type="submit">{editTodo ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default Form;