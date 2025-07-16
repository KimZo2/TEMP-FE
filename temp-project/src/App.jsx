// App.js (수정 예시)
import DefaultLayout from '@/main/DefaultLayout';
import Map from '@/game/Map';
import Header from '@/main/Header';
import Body from '@/main/Body';
import Chat from '@/chats/Chat'
import {AuthContext} from '@/users/AuthContext'
import '@/App.css';
import { createContext, useState } from 'react';
import Main from '@/main/Main';

export default function App() {

  const [isLogin, setLogin] = useState(false);

  return (
    <>
      <DefaultLayout>
        <AuthContext.Provider value={setLogin}>
          <Header />
          <Body>
            { ! isLogin && <Main/>}
            { isLogin && <Map/>}
          </Body>
        </AuthContext.Provider>
      </DefaultLayout>
    </>
  );
}
