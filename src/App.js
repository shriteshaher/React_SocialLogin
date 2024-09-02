
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginDashboard from './components/LoginDashboard'

function App() {
  return (
   
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/" element={<Login />} />
       <Route path="/login_dashboard" element={<LoginDashboard></LoginDashboard>}/>
    </Routes>
    
  );
}

export default App;
