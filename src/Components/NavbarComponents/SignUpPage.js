// SignUpPage.js
import React from 'react';
import '../NavbarComponentsCSS/SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className="window">
      <div className='signUpModal'>
        <div className='paddingModal'>
          <div className='nameFields'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
          </div>
          <div className='nonNameFields'>
            <input type='email' placeholder='Email ID' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            <input type='text' placeholder='Phone No.' />
          </div>

          <div className="termsConditions">
            <h4>Terms and Conditions</h4>
            <div className='abc'>
              <input type="checkbox" />
              <label>I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
            </div>
          </div>

          <div className='formButtons'>
            <input className='button-17' type='button' value="Sign Up"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
