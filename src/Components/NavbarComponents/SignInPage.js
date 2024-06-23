// SignInPage.js
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggedIn, toggleSignInFailure } from '../../Redux/Store';
import '../NavbarComponentsCSS/SignInPage.css';

const SignInPage = () => {
  const isSignInFailure = useSelector(state => state.isSignInFailure);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      let apiUrl;
      if (process.env.NODE_ENV === 'development') {
        apiUrl = 'http://localhost:8084'; // Example: Replace with your local API URL
      } else {
        apiUrl = 'https://shopsmart-backend.onrender.com'; // Example: Replace with your deployed API URL
      }
      const response = await axios.post(`${apiUrl}/loginAuth`, formData);
      if (response.data === true) {
        dispatch(loggedIn({ value: true }));
        navigate('/');
      } else {
        dispatch(toggleSignInFailure({ value: true}));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const [formData, setFormData] = useState({
    emailId: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    var newValue = value

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const printData = async () => {
    console.log(formData)
  }

  return (
    <div className="window">
      <div className='signInModal'>
        <div className='paddingModal'>
          <div className='nonNameFields'>
            <input type='email' placeholder='Email ID' name='emailId' value={formData.emailId} onChange={handleInputChange} />
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
          </div>
          <div className='formButtons'>
            <input className='button-17' type='button' value="Sign In" onClick={loginHandler}></input>
          </div>
        </div>
      </div>

      {isSignInFailure && (
        <div className='signInFailure'>
          {/* You can put your failure message or content here */}
          Sign in failed. Please check your credentials.
          <button onClick={()=>{dispatch(toggleSignInFailure({ value: false}))}}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
