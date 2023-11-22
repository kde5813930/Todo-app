import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }){

  const wrap = document.querySelector('body');

  // 로컬스토리지 테마 가져오기
  function getMode() {
    const getTheme = localStorage.getItem('theme');

    if(getTheme === 'light'){
      return false;
    }

    if(getTheme === 'dark'){
      return true;
    }
  }

  const initMode = getMode();

  const [mode, setMode] = useState(initMode);

  // 다크모드 버튼 클릭시 토글링
  function darkMode(){
    setMode( prev => !prev);
  }

  // mode값 변경시 로컬스토리지에 있는 테마값과 wrap
  useEffect( () => {
    addClassDark(mode);
  }, [mode]);


  // 다크모드 class 추가 / 삭제
  function addClassDark(darkMode) {
    if(darkMode){
      wrap.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else{
      wrap.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  return(
    <DarkModeContext.Provider value={{mode, darkMode}}>
      {children}
    </DarkModeContext.Provider>
  )

}