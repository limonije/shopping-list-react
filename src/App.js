//import logo from './logo.svg';
import cart from './cart.png';
import './App.css';
import Container from './Container'
//import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cart} className="App-logo" alt="logo" />
        <h1>
          Grocery List
        </h1>
      </header>
      <Container />
    </div>
  );
}

export default App;
