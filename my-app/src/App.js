import './App.css';
import { useState } from 'react';
import NavBar from './Page/NavBar.js';
import HomePage from './Page/HomePage.js';
import ChatsPage from './Page/ChatsPage.js';
import ProfilePage from './Page/ProfilePage.js';
import { purple } from '@mui/material/colors';
import { Routes, Route} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const darkTheme = createTheme ({
    palette: {
      mode: 'dark',
      background: {
        main: purple[500],
        secondary: '#3ac4fa'
      }
    }
  })

  const ligthTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        main: '#11cb5f',
        secondary: '#1c74e8'
      },
    }
  })

  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeProvider theme={isDark ? darkTheme : ligthTheme}>
      <div className="App" background='main'>
        <NavBar/>
        <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='chats' element = {<ChatsPage/>}>
            <Route path=':chatId' element = {<ChatsPage/>}/>
          </Route>
          <Route path='*' element = {<ProfilePage/>}/>
        </Routes>
      </div>
    </ThemeProvider>
)
}

export default App;
