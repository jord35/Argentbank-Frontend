import './App.css'
import { Routes, Route, } from "react-router-dom";
// import { Provider } from 'react-redux'

// import { store } from './store';
import HomePage from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';

function App() {
  return (


    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes>


  );
}

export default App;
