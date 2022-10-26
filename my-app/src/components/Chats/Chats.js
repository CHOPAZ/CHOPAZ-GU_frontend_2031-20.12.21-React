import { useState, useEffect } from 'react'
import './Chats.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'


const chatsPlace = [
  {
    id: 'id1',
    name: 'Pavel'
  },
  {
    id: 'id2',
    name: 'Oleg'
  }
]

function Chats () {

  const [chats, setChats] = useState([])

  useEffect(()=>{
        setChats(chatsPlace)
  },[])

  return (
    <Box sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.secondary', color: 'white', height: '100vh'}} className='chatsContent'>
      <nav aria-label="secondary mailbox folders">
        <h1>Чаты</h1>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              {
                chats.map((e, i) => <ListItemText key={i}
                  primary={e.name}/>)
              }
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    
  )

}

export default Chats