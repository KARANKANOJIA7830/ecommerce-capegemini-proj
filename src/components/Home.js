import React, { useState }from 'react';
import '../../src/App.css';
import MainNavbar from '../navigation/mainnavbar.js'
import FirstGrid from '../body/first_grid';
import SlidingCarousel from '../slidingcarousel/carousel'
import Footer from '../footer.js'
import { getCardActionAreaUtilityClass } from '@mui/material';
import LoginForm from '../components/LoginForm';

function App() {
  // const adminUser ={
  //   email: "admin@gmail.com",
  //   passoword: "admin@123"
  // }
  // const [user, setUser] = useState({nmae:"", email:""});
  // const [error, setError] = useState("");

  // const Login = () => {
  //   console.log(details);
  // }
  
  const Logout = () => {
    console.log("Logout");
  }

  return (
  <div>
    {/* <div className='App'>
    //   {(user.email != "") ? (
    //     <div className="welcome">
    //       <h2>welcome, <span>{user.nmae}</span></h2>
    //       <button>Logout</button>
    //     </div>
    //   ) : ( 
        
    //   )}
    // </div>*/}
   

    <div>
      <SlidingCarousel />
    </div>

    <div className='grid'>
      <FirstGrid />
    </div>

  </div>
  );
}

export default App;
