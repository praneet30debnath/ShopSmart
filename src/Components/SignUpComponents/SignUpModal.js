import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCloseForRegistrationStatus, setRegistrationStatus } from "../../Redux/Store";
import success from './pics/checked.png';
import warning from './pics/warning.png';
import './styles/SignUpModal.css';

const images = [success, warning];
images.forEach(image => {
    new Image().src = image;
});

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