import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
function App() {
  return (
    <Router>
      <Routes>
  <Route exact path='/' element={<Home/>}/>
 
  <Route exact path='register' element={<Register/>}/>
  <Route exact path='login' element={<Login/>}/>





  </Routes>
    </Router>
  );
}

export default App;
