import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/login/Register"
import Login from './components/login/Login';
import ResetPass from './components/login/ResetPass';
import MiniDrawer from './components/dashboard/Dashboard';
import Trash from "./components/dashboard/Trash";
import Archive from "./components/dashboard/Archive"

function App() {
  return (
    <Router>
    <>
    <Routes>
      <Route path="" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgotpass"element={<ResetPass/>}/>
      <Route path="/home/*" element={<MiniDrawer/>}>
        <Route path='archive' element={<Archive />} />
        <Route path='trash' element={<Trash />} />
      </Route>
    </Routes>
    </>
    </Router>
  );
}

export default App;
