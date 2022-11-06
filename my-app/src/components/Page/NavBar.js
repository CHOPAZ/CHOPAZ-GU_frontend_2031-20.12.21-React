import { Link } from "react-router-dom";
import './NavBar.css';
import Button from '@mui/material/Button';

function NavBar () {

  return (
    <div className="navBar">
      <h2>Menu</h2>
      <Button variant="outlined">
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant="outlined">
        <Link to={'/chats/chat'}>Chats</Link>
      </Button>
      <Button variant="outlined">
        <Link to={'/profile'}>Profile</Link>
      </Button>
    </div>
  )
}

export default NavBar