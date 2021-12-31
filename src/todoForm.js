import React, { useState } from 'react';
import Plus from './plus';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }

    const onChange = e => {
      console.log("onchange" + value);
      e.preventDefault();
      setValue(e.target.value);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="todoInput"
        value={value}
        placeholder="Add New Item"
        onChange={onChange}
        /><Plus onClick={handleSubmit}/>
      </form>
      </>
    );
  }
  
  export default TodoForm;