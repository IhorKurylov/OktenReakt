import styles from './LoginPage.module.css'
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from "react-hook-form";
import { apiService } from '../../services/apiService.js';



const schema = Joi.object({
  email: Joi.string().required().min(10).pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).messages({
    "string.empty": "You must be at least 18 years old",
    "string.min": "Minimun 10",
    "string.pattern.base": "Not email",
  }),
  password: Joi.string().required(),
});

const LoginPageUseFormJoi = () => {
  const { register, handleSubmit, formState: { errors, isValid }} = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // handleLogin()
    apiService.handleLoginAxios(data)
  }

  // const handleLogin = async () => {
  //   try{
  //     const data = await fetch('http://localhost:8000/api/login', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         email: '',
  //         password:''
  //       })
  //     })
  //     const response = await data.json()
  //     console.log(response);
  //   } catch (e) {
  //
  //   }
  // }
  console.log(errors);

  return(
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
        <label>
          Email:
          <br/>
          <input type="text" {...register('email')}/>
        </label>
        {errors?.email?.message && <span style={{color: 'red'}}>{errors.email.message}</span>}
        <label>
          Password:
          <br/>
          <input type="number" {...register('password')}/>
        </label>
        {errors?.password?.message && <span style={{color: 'red'}}>{errors.password.message}</span>}

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default  LoginPageUseFormJoi
