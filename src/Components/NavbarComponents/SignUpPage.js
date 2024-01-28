// SignUpPage.js
import React from 'react';
import '../NavbarComponentsCSS/SignUpPage.css'
import { useState,setState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  var responseStatusCode = null;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    var newValue = "";
    if(type==='text' && name==='firstName') {
      newValue = value;
    } else if(type==='text' && name==='lastName') {
      newValue = value;
    } else if(type==="email") {
      newValue = value;
    } else if(type==="password") {
      newValue = value;
    } else if(type==="checkbox") {
      newValue=checked;
    } else {
      newValue = value;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const printData = async () => {
    console.log(formData)
    try {
      // Perform validation here if needed
      console.log(formData)
      // Make a POST request using Axios
      const response = await axios.post('http://localhost:8084/users', formData);

      // Handle the response as needed
      debugger;
      if (response.status === 200) {
        // Registration successful, update the state to show the message
        setRegistrationStatus('Registration Successful');
      }
      console.log('Data successfully submitted:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting data:', error);
    }
  }

  return (
    <div className="window">
      <div className='signUpModal'>
        <div className='paddingModal'>
        {registrationStatus && (
            <div className="registrationMessage">
              <p>{registrationStatus}</p>
            </div>
          )}
          {!registrationStatus && (
            <div>
          <div className='nameFields'>
            <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleInputChange}/>
            <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleInputChange}/>
          </div>
          <div className='nonNameFields'>
            <input type='email' placeholder='Email ID' name='emailId' value={formData.emailId} onChange={handleInputChange}/>
            <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange}/>
            <input type='password' placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange}/>
            <input type='number' placeholder='Phone No.' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange}/>
          </div>

          <div className="termsConditions">
            <h4>Terms and Conditions</h4>
            <div className='abc'>
              <input type="checkbox" name='termsAccepted' value={formData.termsAccepted} onChange={handleInputChange}/>
              <label>I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
            </div>
          </div>

          <div className='formButtons'>
            <input className='button-17' type='button' value="Sign Up" onClick={printData} disabled={!formData.termsAccepted}></input>
          </div></div>)}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
