import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/login/Register"
import Login from './components/login/Login';
import ResetPass from './components/login/ResetPass';
import Header from './components/dashboard/Header';
import CreateArea from './components/dashboard/CreateArea';
import Home from './components/dashboard/Home';

function App() {
  return (
    <Router>
    <>
    <Routes>
      <Route path="" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpass"element={<ResetPass/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
    </Router>
  );
}

export default App;
