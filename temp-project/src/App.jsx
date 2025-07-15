// App.js (수정 예시)
import DefaultLayout from './layouts/DefaultLayout';
import PlayerControl from './components/PlayerControl';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

export default function App() {
  return (
    <DefaultLayout>
        <Header />
        <Body>
          <PlayerControl />
        </Body>
      </DefaultLayout>
  );
}
