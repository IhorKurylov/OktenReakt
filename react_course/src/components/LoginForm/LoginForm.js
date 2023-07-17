import styles from '../../pages/LoginPage/LoginPage.module.css';
import { forwardRef } from 'react';

const LoginForm =({handleSubmit, emailRef, passwordRef}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
      <label>
        Email:
        <br/>
        <input type="text" ref={emailRef}/>
      </label>
      <label>
        Password:
        <br/>
        <input type="password" ref={passwordRef}/>
      </label>

      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
