// SignUpPage.js
import React from 'react';
import '../NavbarComponentsCSS/SignUpPage.css'
import { handleCloseForRegistrationStatus } from "../../Redux/Store";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import SignUpForm from '../SignUpComponents/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';
import SignUpModal from '../SignUpComponents/SignUpModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
