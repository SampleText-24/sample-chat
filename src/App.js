import {ChatEngine} from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm";

import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="b182d8a0-3421-4182-a11e-7dde152510a8"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App