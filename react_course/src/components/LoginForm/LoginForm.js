import styles from '../../pages/LoginPage/LoginPage.module.css';
import { forwardRef } from 'react';

const LoginForm =({handleSubmit, emailRef, passwordRef}) => {
  console.log(emailRef, passwordRef);
  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete={'off'}>
      <label>
        Email:
        <br/>
        {/*<input type="text" value={email} onChange={handleEmailChange} autoComplete={'off'}/>*/}
        {/*<input type="text" value={formValues.email} onChange={(e)=>handleFormChange(e, 'email')} autoComplete={'off'}/>*/}
        <input type="text" ref={emailRef}/>
      </label>
      <label>
        Password:
        <br/>
        {/*<input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete={'off'}/>*/}
        {/*<input type="password" value={formValues.password} onChange={(e)=>handleFormChange(e, 'password')} autoComplete={'off'}/>*/}
        <input type="password" ref={passwordRef}/>
      </label>

      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
