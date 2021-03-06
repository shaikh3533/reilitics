import React, { useState } from "react";
import classes from './ContactUs.module.css';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'


const MessageForm = () => {
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        reCaptcha: false
    })
    const [value, setValue] = useState('')
    const submitMessage = event => {
        event.preventDefault();
    }
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const onChangeRecaptcha = (value) => {
        console.log("Captcha value:", value);
    }


    return (
        <>
            <form onSubmit={submitMessage}>
                <div className="row">
                    {console.log(userInput)}
                    <div className="col-lg-6 col-md-6 col-12">
                        <div class="form-group my-2">
                            <input
                                type="text" className={`form-control ${classes.formField}`} value={userInput.firstName} id="firstName" onChange={handleChange} placeholder="First Name">
                            </input>
                        </div>
                        <div class="form-group my-2">
                            <PhoneInput
                                placeholder="Enter phone number"
                                className={`${classes.phoneInputInput} ${classes.phoneInput}`}
                                value={value}
                                onChange={setValue} />

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div class="form-group my-2">
                            <input
                                type="text" className={`form-control ${classes.formField}`} value={userInput.lastName} id="lastName" onChange={handleChange} placeholder="Last Name">
                            </input>
                        </div>
                        <div class="form-group my-2">
                            <input
                                type="email" className={`form-control ${classes.formField}`} value={userInput.email} id="email" onChange={handleChange} placeholder="Email address">
                            </input>
                        </div>
                    </div>
                    <div class="form-group my-2">
                        <input
                            type="text" className={`form-control ${classes.formField}`} value={userInput.subject} id="subject" onChange={handleChange} placeholder="Subject">
                        </input>
                    </div>
                    <div class="form-group my-2">
                        <textarea
                            type="text" className={`form-control ${classes.formField} ${classes.textarea}`} value={userInput.message} id="message" onChange={handleChange} placeholder="Message">
                        </textarea>
                    </div>
                    <div className="d-inline-flex">
                        <div>
                            <h6 className="mb-0">Please check the box below to complete</h6>
                            <br />
                            <ReCAPTCHA
                                sitekey="6LdlkHUdAAAAAMp28lUJMQixeXECX2BU4VkJvUYl"
                                id="reCaptcha"
                                className={classes.reCaptcha}
                                onChange={onChangeRecaptcha}
                                name="reCaptcha"
                                value={userInput}

                            />,
                        </div>
                        <div className={`${classes.positionRight}`}>
                            <button type="submit" className={`btn ${classes.button}`}>Send</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default MessageForm;