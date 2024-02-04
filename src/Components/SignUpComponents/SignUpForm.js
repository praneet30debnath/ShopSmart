import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { handleOpenForRegistrationStatus, handleShowSignUpForm, setRegistrationStatus } from "../../Redux/Store";

const SignUpForm = () => {
    const dispatch = useDispatch();

    const handleRegistrationStatus = (registrationStatus) => {

        dispatch(setRegistrationStatus({ value: registrationStatus }))
    }

    const emptyForm = {
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        termsAccepted: false,
    };

    const [formData, setFormData] = useState(emptyForm);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        var newValue = "";
        if (type !== "checkbox") {
            newValue = value;
        } else if (type === "checkbox") {
            newValue = checked;
        }

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const submitData = async () => {
        try {
            console.log(formData)
            const response = await axios.post('http://localhost:8084/users', formData, {
                validateStatus: function (status) {
                    return status >= 200 && status <= 500; // Resolve only if the status code is between 200 and 499
                },
            });

            if (response.status === 200) {
                handleRegistrationStatus('Registration Successful|Hi ' + formData.firstName + ', Welcome to ShopSmart. Get varities of products to buy online|Explore');
                setFormData(emptyForm);
            } else {
                if (response.data.message.includes("unique_email_constraint")) {
                    handleRegistrationStatus("Oops...!!|Email Already Exists. Please use a different Email ID or Login with the same Email ID|Try Again");
                    dispatch(handleShowSignUpForm({ value: true }));
                } else {
                    handleRegistrationStatus("Server Error");
                }
            }
            dispatch(handleOpenForRegistrationStatus());
            console.log('Data successfully submitted:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    }

    return (
        <div>
            <div className='nameFields'>
                <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleInputChange} />
                <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleInputChange} />
            </div>

            <div className='nonNameFields'>
                <input type='email' placeholder='Email ID' name='emailId' value={formData.emailId} onChange={handleInputChange} />
                <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
                <input type='password' placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} />
                <input type='number' placeholder='Phone No.' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} />
            </div>

            <div className="termsConditions">
                <h4>Terms and Conditions</h4>
                <div className='abc'>
                    <input type="checkbox" name='termsAccepted' value={formData.termsAccepted} onChange={handleInputChange} />
                    <label>I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
                </div>
            </div>

            <div className='formButtons'>
                <input className='button-17' type='button' value="Sign Up" onClick={submitData} disabled={!formData.termsAccepted}></input>
            </div>
        </div>
    )
}

export default SignUpForm;