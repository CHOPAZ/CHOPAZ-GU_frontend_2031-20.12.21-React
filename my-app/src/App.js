import { useState } from 'react';
import NavBar from './components/Page/NavBar.js';
import HomePage from './components/Page/HomePage.js';
import ProfilePage from './components/Page/ProfilePage.js';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Routes, Route} from "react-router-dom"
import ChatsPage from './components/Page/ChatsPage.js';

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
