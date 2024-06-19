// SignUpPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../NavbarComponentsCSS/SignUpPage.css';
import SignUpForm from '../SignUpComponents/SignUpForm';
import SignUpModal from '../SignUpComponents/SignUpModal';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const { openForRegistrationStatus, showSignUpForm, registrationStatus } = useSelector(state => state);



  return (
    <div className="window">
      <div className='signUpModal'>
        <div className='paddingModal'>
          {registrationStatus && (
            <div className="registrationMessage">
              <SignUpModal />
            </div>
          )}
          {(!registrationStatus || showSignUpForm) && (
            <div>
              <SignUpForm />
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
