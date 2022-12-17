import React from 'react';
// import Login from './components/auth/Login';
import { Quora } from './components/Quora';
import './App.css';
import { useSelector } from 'react-redux';
import { Login } from '@mui/icons-material';
import { selectUser } from './feature/userSlice';


const App = () => {
  // const user = useSelector((store) => store)
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? (<Quora />) : (<Login />)
      }

    </div>
  );
}

export default App;
