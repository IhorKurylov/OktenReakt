import styles from './LoginPage.module.css'
import { useEffect, useRef, useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.js';
const LoginPage = () => {

  // const [formValues, setFormValues] = useState({
  //   email: '',
  //   password: ''
  // })
  // const handleFormChange = (e, key) => {
  //   e.preventDefault();
  //   setFormValues((prevState)=>{
  //       return{
  //         ...prevState,
  //         [key]: e.target.value
  //       }
  //   })
  // }


  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef?.current?.value, passwordRef?.current?.value);
    // emailRef.current.value = 'Ihorafad'
    // handleLogin();
  }

  const handleLogin = async () => {
    try{
      const data = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        // body: JSON.stringify(formValues)
      })
      const response = await data.json()
      console.log(response);
    } catch (e) {

    }
  }

  const emailRef = useRef('')
  const passwordRef = useRef('')
  console.log('RENDER');

  // useEffect(()=> {
  //
  //   console.log(emailRef.current.value, passwordRef.current.value);
  //
  // },[emailRef.current.value, passwordRef.current.value])



  // const handleEmailChange = (e)=> setEmail(e.target.value)
  return(
    <div className={styles.wrapper}>
      <LoginForm handleSubmit={handleSubmit} emailRef={emailRef} passwordRef={passwordRef}/>
    </div>
  )
}

export default  LoginPage
