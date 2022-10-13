import './Message.css'
function Message({myFirstText}) {

  return (
    <div className="Message">
      <header className="Message-header">{myFirstText}</header>

    </div>
  )
}
export default Message