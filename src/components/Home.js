import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    // console.log(inputs);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setErrors(validate(inputs));
        setIsSubmit(true);
        navigate("/home/barchart");
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(inputs);
        }
    }, [errors])

    const validate = (values) => {
        console.log(values);
        const email_regex = /^[a-zA-Z0-9._-]+@[a-z]+.[a-z]+$/;
        const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const fullname_regex = /^[a-zA-Z-' ]*$/;
        const ph_regex = /^\d{10}$/;

        const error = {};
        if (!values.email) {
            error.email = "Email is required";
        } else if (!email_regex.test(values.email)) {
            error.email = "Email is not valid";
        }

        if (!values.password) {
            error.password = "Password is required";
        } else if (!password_regex.test(values.password)) {
            error.password = "Password is not valid, must be more than 6 character, contain  at least one numeric digit, one uppercase and one lowercase letter";
        }

        if (!values.confrm_password) {
            error.confrm_password = "Confirm your password";
        } else if (values.confrm_password !== values.password) {
            error.confrm_password = "Password is incorrect";
        }

        if (!values.fullname) {
            error.fullname = "Full name is required";
        } else if (!fullname_regex.test(values.fullname)) {
            error.fullname = "Only letters and white space allowed";
        }

        if (!values.ph) {
            error.ph = "Phone no. is required";
        } else if (!ph_regex.test(values.ph)) {
            error.ph = "Only 10 digit numeric character allowed";
        }

        return error;
    };

    return (
        <>
            <div className='container'>
                <div className="container__main-div">
                    <div className='container__main-div__left'>
                        <div className="container__main-div__left__text">
                            <p><b> Choose a date range</b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitelectus</p>
                        </div>
                    </div>
                    <div className='container__main-div__right'>
                        <h4>Create an account</h4>
                        <form className='container__main-div__right__form' onSubmit={handleSubmit} >

                            <label for="email">Your email address</label> <br />
                            <input className='container__main-div__right__form__input' type="text" id="email" name="email" value={inputs.email || ""} onChange={handleChange} /> <br />
                            <p className='container__main-div__right__form__errorMsg'>{errors.email}</p>

                            <label for="password">Your password</label> <br />
                            <input className='container__main-div__right__form__input' type="text" id="password" name="password" value={inputs.password || ""} onChange={handleChange} /> <br />
                            <p className='container__main-div__right__form__errorMsg'>{errors.password}</p>

                            <label for="confrm_password">Confirm your password</label> <br />
                            <input className='container__main-div__right__form__input' type="text" id="confrm_password" name="confrm_password" value={inputs.confrm_password || ""} onChange={handleChange} /> <br />
                            <p className='container__main-div__right__form__errorMsg'>{errors.confrm_password}</p>

                            <label for="fullname">Your full name</label> <br />
                            <input className='container__main-div__right__form__input' type="text" id="fullname" name="fullname" value={inputs.fullname || ""} onChange={handleChange} /> <br />
                            <p className='container__main-div__right__form__errorMsg'>{errors.fullname}</p>

                            <label for="ph">Your phone number</label> <br />
                            <input className='container__main-div__right__form__input' type="text" id="ph" name="ph" value={inputs.ph || ""} onChange={handleChange} /> <br />
                            <p className='container__main-div__right__form__errorMsg'>{errors.ph}</p>

                            <label>
                                <input type="checkbox" /> I read and agree Terms and Conditions
                            </label> <br /> <br />

                            <input type="submit" value="Create account" className='container__main-div__right__form__input submit--btn' />
                            {/* <button className='container__main-div__left__form__input' type="submit">Create account</button> */}

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home