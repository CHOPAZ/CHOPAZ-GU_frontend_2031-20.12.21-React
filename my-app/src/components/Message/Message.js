import './Message.css'

function Message ({author, text}) {

  return(
    <div className='Message'>
      <h3>{author}</h3>
      <p>{text}</p>
    </div>
  )
}
export default Message