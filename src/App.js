import { useState } from 'react';
import './libs/styles/style.scss'
import TodoList from './components/TodoList';
import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {

  const filterList = ['all', 'active', 'completed']
  const [filter, setFilter] = useState(filterList[0]);

  const checkFilter = (filter) => {
    setFilter(filter);
  }

  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filterList} checkFilter={checkFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
