import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Page/ChatsPage.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import Chat from '../components/Chats/Chat.js'
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react'

const chatsPlace = [
  {   
    id:"Pavel",
    messages:[
        {
            author:'Pavel',
            text:'Hello',
            date: new Date().toLocaleTimeString()
        },
        {
            author:'Bot',
            text:'Hello to you too',
            date: new Date().toLocaleTimeString()
        },
    ]
  },
  {   
    id:"Olga",
    messages:[
      {
        author:'Olga',
        text:'Hello',
        date: new Date().toLocaleTimeString()
    },
    {
        author:'Bot',
        text:'Hello to you too',
        date: new Date().toLocaleTimeString()
    }
    ]
  },
]

function ChatList () {

  const [chats, setChats] = useState([])

  useEffect(()=>{
        setChats(chatsPlace)
  },[])

  const {chatId} = useParams()
  const {palette} = useTheme()

  return(
    <div style={{display:'flex', flexGrow:1, background:palette.background.main}}>
      <Box sx={{bgcolor: 'rgb(43, 129, 240)', color: 'white'}} className='chatsContent'>
          <h2 style={{marginTop:'10px', textAlign:'center'}}>Chats</h2>
          <List>
            <ListItem disablePadding>
                {
                  chats.map((e, id) =>
                    <div key={id}>
                      <i style={{cursor:'pointer', display:'flex', justifyContent:'flex-end'}} className="fa-sharp fa-solid fa-xmark" onClick={() => {
                        setChats([...chats.slice(0, id), ...chats.slice(id + 1)])
                      }}></i>
                      <Button variant="outlined">
                        <Link to={`${id}`}>{e.id}</Link>
                      </Button>
                    </div>)
                    
                }
                <div>
                  <Button variant="outlined" onClick={() => {
                    setChats(e => [...e, chatsPlace[0]])
                  }} className='buttonNewChat'>New chat</Button>
                </div>
            </ListItem>
          </List>
      </Box>
      {
        chatId && chats[chatId] ? <Chat chats={chats[chatId]}/> : <h2 className='headerSelectChat'>Select chat</h2>
      }
    </div>
)
}

export default ChatList