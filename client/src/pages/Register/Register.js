import React, { useState, useEffect } from 'react'

import "./RegisterStyles.scss"

import getData, { addData } from '~/RestApi'

import { API_USER } from '~/assets/API'

import { Link } from 'react-router-dom'

import { imgOffers } from "~/assets/images"

import ToastMessage from '~/components/ToastMessage';



function Register() {
  const [account, setAccount] = useState();
  const [user, setUser] = useState([])
  const [contentMessage, setContentMessage] = useState({
    title: "",
    des: "",
    icon: ""
  })


  useEffect(() => {
    getData(API_USER, setUser)
  }, []);

  function toastMessage() {
    const classMessage = document.querySelector('.toast--message')
    classMessage.classList.add('active');
    setTimeout(function () {
      classMessage.classList.remove('active');
    }, 3000)
  }

  const handleSignUp = function (e) {
    e.preventDefault();
    let signUpSuccess = true;
    user.map((item) => {
      if (item.username === account.username) {
        signUpSuccess = false;
      }
    }
    )
    if (signUpSuccess) {
      addData(API_USER, account);
      setContentMessage({
        title: "SignUp Successful !",
        des: "Go to page login",
        icon: "true"
      })
      toastMessage()
      const a = document.querySelectorAll('.form--signUp--input input')
      Array.from(a).map((item) => {
        item.value = ""
      })
    } else {
      setContentMessage({
        title: "SignUp Unsuccessful !",
        des: "Username exists",
        icon: "false"
      })
      toastMessage()
    }
  }



  return (
    <div className='register'>
      <div className="register--container">
        <img src={imgOffers.backgroundSignUp} alt="" />
        <form onSubmit={handleSignUp} className="register__form">
          <h2 className="form--signUp__title form__title">login travel</h2>
          <div className="form--signUp--input input-focus-effect">
            <input
              type="email" required placeholder="Please Enter Email"
              onChange={e => setAccount({ ...account, email: e.target.value })}
            />
            <label>Email</label>
          </div>
          <div className="form--signUp--input input-focus-effect">
            <input
              type="text" required placeholder="Please Enter Username"
              onChange={e => setAccount({ ...account, username: e.target.value })}
            />
            <label>username</label>
          </div>
          <div className="form--signUp--input input-focus-effect">
            <input
              type="password" required placeholder="Please Enter Phone Number / Email"
              onChange={e => setAccount({ ...account, password: e.target.value })}
            />
            <label>password</label>
          </div>
          <div className='link--login--signUp'>
            <Link to="/">Login ?</Link>
          </div>
          <div className="btn--signUp--register btn--login--register">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>

      <ToastMessage
        title={contentMessage.title}
        des={contentMessage.des}
        icon={contentMessage.icon}
      />
    </div>
  )
}

export default Register
