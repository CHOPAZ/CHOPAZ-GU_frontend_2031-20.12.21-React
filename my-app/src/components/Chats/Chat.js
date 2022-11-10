import { useTheme } from '@emotion/react'
import './Chat.css'
function Chat ({chats}) {

  const {palette} = useTheme()
  return (
    <div className="chatItems" style={{background:palette.background.main}}>
            {
                chats.messages.map((e,i)=>
                    <div className="messageItem" key={i}>
                        <h3>{e.author}</h3>
                        <p>{e.text}</p>
                        <p>{e.date}</p>
                    </div>
                )
            }
        </div>
  )

}

export default Chat