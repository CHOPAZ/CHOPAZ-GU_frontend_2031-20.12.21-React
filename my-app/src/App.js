import { useEffect, useState } from 'react';
import Form from './components/Form/Form.js'
import Message from './components/Message/Message.js';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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

  const darkTheme = createTheme ({
    palette: {
      mode: 'dark',
      background: {
        main: purple[500],
      }
    }
  })

  const ligthTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        main: '#11cb5f'
      },
    }
  })

  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeProvider theme={isDark ? darkTheme : ligthTheme}>
      <div className="App" background='primary'>
        <Form className='asd'
          messageList = { messageList }
          messageBody = { messageBody }
          setMessageBody = { setMessageBody }
          setMessageList = { setMessageList }
          setIsDark = { setIsDark }
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
    </ThemeProvider>
)
}

export default App;
