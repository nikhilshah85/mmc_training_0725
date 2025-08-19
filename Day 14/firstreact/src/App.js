import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>

    <h1> Welcome to the world of React</h1>

    <h3> Addition of my Fav numbers are { 10 + 20 } </h3>

    <h3> Tomorrow is { new Date().toDateString() }</h3>

    <h3> We have training tomorrow ? { 15 < 10 ? "Yes" : "No" }</h3>

    <hr/>

    <Home />
    
    </div>
  );
}

export default App;
