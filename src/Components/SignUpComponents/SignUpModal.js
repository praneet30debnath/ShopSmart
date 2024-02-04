import React from "react";
import './styles/SignUpModal.css'
import { useDispatch, useSelector } from "react-redux";
import { setRegistrationStatus, handleCloseForRegistrationStatus } from "../../Redux/Store";
import warning from './pics/warning.png'
import success from './pics/checked.png'
import { useNavigate } from "react-router-dom";

const SignUpModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { openForRegistrationStatus, showSignUpForm, registrationStatus } = useSelector(state => state);

    const handleClose = () => {
        dispatch(setRegistrationStatus({value: null}))
        dispatch(handleCloseForRegistrationStatus())
    }

    const handleSuccessfulSignUp = () => {
        handleClose()
        if(registrationStatus.split('|')[2]==='Explore') {
            navigate('/signin')
        }
    }

    return (
        <div className="modal">
            <div class="container">
                <div class="cookiesContent" id="cookiesPopup">
                    <button class="close"  onClick={handleClose}>✖</button>
                    {registrationStatus.split('|')[0].includes('Oops') ? (<img src={warning} alt="cookies-img" />) : (<img src={success} alt="cookies-img" />)}
                    <h2>{registrationStatus.split('|')[0]}</h2>
                    <p>{registrationStatus.split('|')[1]}</p>
                    <button class="accept" onClick={handleSuccessfulSignUp}>{registrationStatus.split('|')[2]}</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;