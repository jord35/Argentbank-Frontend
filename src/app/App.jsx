import './App.css'
import { Routes, Route, Link } from "react-router-dom";


import HomePage from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
