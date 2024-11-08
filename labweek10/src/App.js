import logo from './logo.svg';
import './App.css';
import Form from './Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home'
import UserCard from './UserCard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="Content">
          <Routes>  {/* Use Routes instead of Switch */}
            <Route exact path="/" element={<Home />} /> {/* Use 'element' for component */}
            <Route path="/form" element={<Form />} />
            <Route path="/user" element={<UserCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
