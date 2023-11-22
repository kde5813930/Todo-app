import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';


export default function   AddList({ onAdd }) {

  const [text, setText] = useState('');

  const addText = (e) => {
    setText(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();

    if(text.trim().length === 0){
      return;
    }
    
    onAdd({id:uuid4(), text, status:'active'});

    setText('');
  }

  return	(
    <form onSubmit={addTodo} className='add-todo'>
      <input type="text" onChange={addText} value={text}/>
      <button className='sm-btn'>Add</button>
    </form>
  );
}

