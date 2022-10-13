import './App.css';
import Message from './components/Message/Message';

function App() {
  const myFirstText = 'This my first prop in project :)'
  return (
    <div className="App">
      <Message myFirstText={myFirstText}/>
    </div>
)
}

export default App;
