import './Form.css'

function Form ({messageBody, setMessageBody, setMessageList}) {

  const {text, author} = messageBody

  const submitForm = (e) => {
    e.preventDefault()
    if(text.length > 0) {
      setMessageList(pervstate => [...pervstate, {text, author}])
    }
    setMessageBody ({
      text: '',
      author: ''
    })
  }
  return (
      <form onSubmit = {submitForm} className='Form'>
        <input
          value = {author}
          placeholder = 'Your name'
          onChange = { (e) => setMessageBody(pervstate => ({...pervstate, author: e.target.value}))}
          />
        <input
          value={text}
          placeholder='Your text'
          onChange={(e) => setMessageBody(pervstate => ({...pervstate, text: e.target.value}))}
        />
        <div className='buttonSubmit'><button type='submit'>Submit</button></div>
      </form>
  )

}
export default Form