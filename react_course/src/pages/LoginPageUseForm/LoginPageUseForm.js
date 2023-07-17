import styles from './LoginPage.module.css'
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from "react-hook-form";

const LoginPageUseForm = () => {
  const { register, handleSubmit, formState: { errors, isValid }, watch} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleLogin()
  }

  const handleLogin = async () => {
    try{
      const data = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email: '',
          password:''

        })
      })
      const response = await data.json()
      console.log(response);
    } catch (e) {

    }
  }
  console.log(watch('email'));
  console.log(watch('password'));
  return(
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
        <label>
          Email:
          <br/>
          <input type="text" {...register('email', {
            required: 'Email can not be empty',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'This is not valid email' // JS only: <p>error message</p> TS only support string
            }
          })}/>
        </label>
        {errors?.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
        <label>
          Password:
          <br/>
          <input type="number" {...register('password', {
            required: 'Password can not be empty',
            minLength: {
              value: 5,
              message: 'minLength 5 characters'
            }
          })}/>
        </label>
        {errors?.password?.message && <span style={{color: 'red'}}>{errors.password.message}</span>}

        <button type='submit' disabled={!isValid}>Login</button>
      </form>
    </div>
  )
}

export default  LoginPageUseForm
