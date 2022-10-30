import { useState, useEffect } from "react";


import { Link } from "react-router-dom";

import { API_USER } from "~/assets/API";
import getData from "~/RestApi"

import "./LoginStyles.scss";

import ToastMessage from "~/components/ToastMessage";


function Login() {
    const [account, setAccount] = useState();
    const [user, setUser] = useState([])
    useEffect(() => {
        getData(API_USER, setUser)
    }, []);

    const handleLogin = function (e) {
        e.preventDefault();
        user.map((item) => {
            if (item.username === account.username && item.password === account.password) {
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
        )
    }

    return <div className="login">
        <div className="login--container">
            <form onSubmit={handleLogin} className="form--login">
                <h2 className="form--login__title form__title">login travel</h2>
                <div className="form--login__UserName input-focus-effect">
                    <input
                        type="text" required placeholder="Please Enter Phone Number / Email"
                        onChange={e => setAccount({ ...account, username: e.target.value })}
                    />
                    <label>username</label>
                </div>
                <div className="form--login__Password input-focus-effect">
                    <input
                        type="password" required placeholder="Please Enter Password"
                        onChange={e => setAccount({ ...account, password: e.target.value })}
                    />
                    <label>password</label>
                </div>
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