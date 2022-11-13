import React, { useState, useEffect} from 'react'

import "./RegisterStyles.scss"

import { Link } from 'react-router-dom'


import ToastMessage from '~/components/ToastMessage';

import {fetchApiAcc, createAcc} from '~/assets/API'
import FormInput from '~/components/FormInput/FormInput';



function Register() {
  const [user, setUser] = useState([])

  const [values, setValues] = useState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
  });


  const inputs = [
    {
      id: "1",
      name: "userName",
      type: "text",
      placeholder: "Enter username",
      errorMessage: "User name should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "[A-Za-z0-9]{3,16}$",
      required: true
      },
    {
      id: "2",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: "3",
      name: "password",
      type: "text",
      placeholder: "Enter password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      required: true
    },
    {
      id: "4",
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm password",
      errorMessage: "Password don't match!",
      label: "Confirm password",
      pattern: values.password,
      required: true
    }
  ]

  const [propsToast, setpropsToast] = useState({
    title: "",
    des: "",
    icon: ""
  })

  function toastMessage() {
    const classMessage = document.querySelector('.toast--message')
    classMessage.classList.add('active');
    setTimeout(function () {
      classMessage.classList.remove('active');
    }, 3000)
  }

  useEffect(() => {
    fetchApiAcc()
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
  }, []);

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }


  const handleSignUp = function (e) {
    e.preventDefault();
    let checkUser = false
    for(const element of user ) {
      if(element.userName === values.userName) {
        checkUser=true
      }
    }

    if (checkUser) {
       setpropsToast({
        title: "SignUp Unsuccessful !",
        des: "Username exists",
        icon: "false"
      })
      toastMessage()
    } else {
      createAcc(values)
      setpropsToast({
        title: "SignUp Successful !",
        des: "Go to page login",
        icon: "true"
      })
      toastMessage()

      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }

  return (
    <div className='register'>
      <div className="register--container">
        <form onSubmit={handleSignUp} className="register__form">
          <h2 className="form--signUp__title form__title">login travel</h2>
          {
            inputs.map(input =>  
            <FormInput 
              key= {input.id}
              value={values[input.name]} 
              onChange={onChange}
              {...input}
            />
            )}

          <div className='link--login--signUp'>
            <Link to="/" >Login ?</Link>
          </div>
          <div className="btn--signUp--register btn--login--register">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>

      <ToastMessage
        title={propsToast.title}
        des={propsToast.des}
        icon={propsToast.icon}
      />
    </div>
  )
}

export default Register
