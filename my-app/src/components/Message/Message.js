import './Message.css';
import { useTheme } from '@emotion/react'

function Message ({author, text}) {

  const theme = useTheme()

  return(
    <div className='Message' style={{background:theme.palette.background.main}}>
      <h3>{author}</h3>
      <p>{text}</p>
    </div>
  )
}
export default Message