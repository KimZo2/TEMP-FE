// App.js (수정 예시)
import DefaultLayout from './layouts/DefaultLayout';
import Map from './components/Map';
import Header from './components/Header';
import Body from './components/Body';
import Chat from '@/components/chats/Chat'
import {LoginContext} from './components/users/LoginContext'
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
          <Body>
            { ! isLogin && <Main/>}
            { isLogin && <Map/>}
          </Body>
        </LoginContext.Provider>
      </DefaultLayout>
    </>
  );
}
