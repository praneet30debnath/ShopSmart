// SignInPage.js
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggedIn } from '../../Redux/Store';
import '../NavbarComponentsCSS/SignInPage.css';

const SignInPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const response = await axios.post('http://localhost:8084/loginAuth', formData);
      
      dispatch(loggedIn({ value: true }));
      navigate('/');
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
    </div>
  );
};

export default SignInPage;
