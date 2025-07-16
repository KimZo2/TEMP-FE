// App.js (수정 예시)
import DefaultLayout from './main/DefaultLayout';
import Map from './game/Map';
import Header from './components/Header';
import Body from './main/Body';
import Chat from '@/components/chats/Chat'
import {LoginContext} from './users/LoginContext'
import './App.css';
import { createContext, useState } from 'react';
import Main from './components/Main';

export default function App() {

  const [isLogin, setLogin] = useState(false);

  return (
    <>
      <DefaultLayout>
        <LoginContext.Provider value={setLogin}>
          <Header />
          { ! isLogin && <Main/>}
          <Body>
            { isLogin && <Map/>}
          </Body>
        </LoginContext.Provider>
      </DefaultLayout>
    </>
  );
}
