import './Form.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { useRef, useEffect } from 'react'

function Form ({messageList, messageBody, setMessageBody, setMessageList, setIsDark}) {

  const {text, author} = messageBody
  const theme = useTheme()

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

  const ref = useRef(null)

  useEffect(() => {
    ref.current?.focus()
  }, [messageList])

  return (
      <div className='container' style={{background:theme.palette.background.main}}>
        <Box onSubmit = {submitForm} className='asd'
          component="form"
          sx={{
            '& > :not(style)': {
            display: 'flex',
            m: 1,
            width: '35ch',},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            inputRef={ref}
            id='outlined-name'
            label='Your name'
            value = {author}
            onChange = {(e) => setMessageBody(pervstate => ({...pervstate, author: e.target.value}))}
          />
          <TextField
            id='outlined-name'
            label='Your text'
            value = {text}
            onChange={(e) => setMessageBody(pervstate => ({...pervstate, text: e.target.value}))}
          />
         <div className='buttonSubmit'>
         <Button variant='contained' onClick={() => {setIsDark(pervstate => !pervstate)}}>Change the topic</Button>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </div>
        </Box>
      </div>
  )

}
export default Form