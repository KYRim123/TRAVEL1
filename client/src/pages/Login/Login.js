import { useState, useEffect } from "react";
import "./LoginStyles.scss";

import { Link } from "react-router-dom";

import {fetchApi} from "~/assets/API";
import ToastMessage from "~/components/ToastMessage";
import FormInput from "~/components/FormInput/FormInput";


function Login() {
    const [user, setUser] = useState([])
    const [values, setValues] = useState({
        userName: "",
        password: ""
    });
    //setting inputs
    const inputs = [
        {
            id: "1",
            type: "text",
            name: "userName",
            label: "UserName",
            placeholder: "Enter UserName",
            required: true,
            errorMessage: ""
        },
        {
            id: "2",
            type: "password",
            name: "password",
            label: "Password",
            placeholder: "Enter Password",
            required: true,
            errorMessage: ""
        }
    ]
   //lay du lieu tu server
    useEffect(() => {
        fetchApi('user')
            .then((res) => {
                setUser(res.val())
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    //set du lieu nhap tu form
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    //kiem tra du lieu dang nhap
    const handleLogin = function (e) {
        e.preventDefault();
        for(const item in user) {
            if (user[item].userName === values.userName && user[item].password === values.password) {
                const loginSuccess = document.querySelector('.loginSuccess');
                loginSuccess.click();
            } else {
                const loginFail = document.querySelector('.toast--message')
                loginFail.classList.add('active');
                setTimeout(function () {
                    loginFail.classList.remove('active');
                }, 8000)
            }
        }
       
    }

    return <div className="login">
        <div className="login--container">
            <form onSubmit={handleLogin} className="form--login">
                <h2 className="form--login__title form__title">login travel</h2>

                {inputs.map(input => 
                    <FormInput 
                        key={input.id} 
                        value={values[input.name]} 
                        onChange={onChange} 
                        {...input}
                    />
                )}

                <div className="link--login--signUp">
                    <Link to="/register">Sign up ?</Link>
                </div>
                <div className="btn--login--register">
                    <button type="submit">Login</button>
                </div>
                <Link className="loginSuccess" style={{ display: "none" }} to="/home">dd</Link>
            </form>
        </div>

        <ToastMessage
            title="Login Unsuccessful !"
            des="Please check password or username"
            icon="false"
        />

    </div>
}

export default Login;