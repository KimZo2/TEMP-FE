// App.js (수정 예시)
import DefaultLayout from './layouts/DefaultLayout';
import Map from './components/Map';
import Header from './components/Header';
import Body from './components/Body';
import Chat from '@/components/chats/Chat'
import './App.css';

export default function App() {
  return (
    <>
      <DefaultLayout>
        <Header />
        <Body>
          <Map/>
        </Body>
      </DefaultLayout>
    </>
  );
}
