import './App.css';
import  { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID ="547c260c-e134-418b-9ccb-fd5f2027c7ea"
      userName = {localStorage.getItem('username')}
      userSecret= {localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  );
}

export default App;
