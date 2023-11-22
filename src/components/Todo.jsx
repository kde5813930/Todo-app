import React from 'react';

export default function Todo({ list, onDeleted, onUpdated }) {

  const {id, text, status} = list

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    console.log({...list, status:status});
    onUpdated({...list, status:status});
    
  }

  const ListDeleted = () => {
    onDeleted(list)
  }

  return(
    <li>
      <label htmlFor={id} className='check-label'>
        <input 
          type="checkbox" 
          id={id} 
          onChange={handleChange} 
          className='text' 
          checked={status === 'completed' ? true : false}/>
        <p>{text}</p>
      </label>
      <button type='button' onClick={ListDeleted} className='btn-remove'>삭제하기</button>
    </li>
  );
}

