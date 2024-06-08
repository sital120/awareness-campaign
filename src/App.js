import './App.css';
import './assets/css/main.css';
import Home from './screens/home'
import Login from './screens/login'
import Signup from './screens/signup'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
     <Router>
     <div className="App">
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Signup" element={<Signup />} />
       </Routes>
     </div>
   </Router>
  );
}

export default App;
