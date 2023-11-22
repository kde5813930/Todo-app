import React, { useEffect, useState } from 'react';
import AddList from './AddList';
import Todo from './Todo';


export default function TodoList({ filter }) {

  const [todo, setTodo] = useState(getItem);

  
  // 리스트 추가
  const handleAdd = (addTodo) => {
    setTodo([...todo, addTodo]);
  }

  // 리스트 업데이트
  const handleUpdate = (update) => {
    setTodo(todo.map(ut => ut.id === update.id ? update : ut))
    // 맵은 해당 조건에 맞는 새로운 배열로 전환 시켜주는것
    // 즉, 기존 todo에 맵을 돌리면 빙글빙글 돌면서 업데이트 된 아디와 기존 아디가 같다면 업데이트된 내용을 업데이트 해주고 아니면 그냥 기존 배열을 리턴하라는건데, 즉 업데이트 된 아이디랑 기존에 있던(업데이트 이전의 값)이 똑같은걸 찾아서 그게 서로 맞으면 업데이트 된 값으로 반환, 아니면 기존의 값으로 반환해서 새로운 배열을 만들어주는 것이다.
    console.log(todo);
  }

  // 리스트 삭제
  const handleDeleted = (deleted) => {
    setTodo(todo.filter(filtered => filtered.id !== deleted.id));
    //삭제되는 데이터 id값이랑 일치하기 않는것만 나열해달라 => 결국 삭제되는 값 제외하고 나열해달라는뜻
  }


  // 리스트, dark/light 모드 로컬에 저장하기

  useEffect( () => {
    //리스트 저장하기
    localStorage.setItem('todo', JSON.stringify(todo));

  }, [todo])


  function getItem() {
    //리스트 가져오기
    const getTodo = localStorage.getItem('todo');
  
    console.log(getTodo);
  
    return getTodo ? JSON.parse(getTodo) : [];
  
  }
  


  // 투두 리스트 필터링
  function filterList () {
    if(filter === 'all'){
      return todo;
    }
    return todo.filter(todo => todo.status === filter);
  }
  
  const list = filterList();


  return	(
    <>
      <div className='list-wrap'>
        <div className="inner">
          <ul className='todo-list'>   
              {
                list.map((list) => (
                  <Todo 
                    list={list} 
                    key={list.id}
                    onDeleted={handleDeleted}
                    onUpdated={handleUpdate}
                  />
              ))
            }
          </ul>
        </div>
      </div>
      <AddList onAdd={handleAdd}/>
    </>
  );

}

