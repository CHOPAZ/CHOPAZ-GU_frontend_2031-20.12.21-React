import { Link, useParams } from 'react-router-dom'
import '../Page/ChatsPage.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import Chat from '../components/Chats/Chat.js'
import Button from '@mui/material/Button'
import { useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat} from '../store/chats/slices'

function ChatList () {

  const {chatId} = useParams()
  const {palette} = useTheme()

  const chats = useSelector(state => state.chats)
  const dispatch = useDispatch()

  const addNewChat = () => {
    dispatch(addChat())
  }

  const removeChat = () => {
    dispatch(deleteChat())
  }

  return(
    <div style={{display:'flex', flexGrow:1, background:palette.background.main}}>
      <Box sx={{bgcolor: 'rgb(43, 129, 240)', color: 'white'}} className='chatsContent'>
          <h2 style={{marginTop:'10px', textAlign:'center'}}>Chats</h2>
          <List>
            <ListItem disablePadding>
                {
                  chats.map((e, id) =>
                    <div key={id}>
                      <i style={{cursor:'pointer', display:'flex', justifyContent:'flex-end'}} className="fa-sharp fa-solid fa-xmark" onClick={removeChat}></i>
                      <Button variant="outlined">
                        <Link to={`${id}`}>{e.id}</Link>
                      </Button>
                    </div>)
                    
                }
                <div>
                  <Button variant="outlined" onClick={addNewChat} className='buttonNewChat'>New chat</Button>
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