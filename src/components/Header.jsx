import React, { useCallback, useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';


export default function Header({ filter, filters, checkFilter }) {

  const filterClick =  useCallback((e) => {
    const value = e.target.innerText;
    checkFilter(value);

  }, [filter]);

  const {mode, darkMode} = useContext(DarkModeContext); 

  return	(
    <header className='header'>
      <h2 className='title'>To Do List</h2>
      <div className="btn-wrap">
        <button type='button' onClick={darkMode} className='btn-dark'>darkMode</button>
        <ul>
          {
            filters.map((list, idx) => (
              <li key={idx} className={`${list === filter ? 'active' : 'filter'}`}>
                <button className='btn-filter' type='button' onClick={filterClick}>{list}</button>
              </li>
            ))
          }
        </ul> 
      </div>
    </header>
  );
}

