import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Login from './login';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
