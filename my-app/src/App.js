import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js'
import Message from './components/Message/Message.js';
import './App.css';

function App() {
  // list message
  const [messageList, setMessageList] = useState([])
  // body message
  const [messageBody, setMessageBody] = useState({
    author: '',
    text: ''
  })

  // answer by robot
  const robotMessage = 'Hello, I got your message'

  useEffect(() => {
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'Bot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, {
          text: robotMessage,
          author: 'Bot'
        }])
      }, 1000)
    }
  }, [messageList])

  return (
    <div className="App">
      <Form
        messageBody = { messageBody }
        setMessageBody = { setMessageBody }
        setMessageList = { setMessageList }
      />
      <div>
        {
          messageList.map((e, i) =><Message
            author={e.author}
            text={e.text}
            key={i}
          />)
        }
      </div>
    </div>
)
}

export default App;
