import logoImg from '../../assets/logo.png';

import styles from './login.module.css';

import { useLogin } from '../../api/authApi.js';
import { useNavigate } from 'react-router';
import { useActionState, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function Login({
    closeModal
}){
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext);
    const { login } = useLogin();
    const [formValues, setFormValues] = useState({email: ''});
    const [error, setError] = useState(null);

    const loginFormHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);
        
        if(values.email === '' || values.password === ''){
            setError("All fields must be filled");
            return;
        }

        try{
            const authData = await login(values.email, values.password);

            userLoginHandler(authData);

            closeModal();
    
            navigate('/');
        }catch(err){
            setError(err.message);
        }
    }

    const [_, loginAciton] = useActionState(loginFormHandler, {email: '', password: ''});

    const changeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    return (
        <>
            <img src={logoImg} alt="logo" className={styles.loginLogoImg}/>
            <h1 className={styles.title}>Log into your account</h1>
            <div className={styles.loginContainer}>
                <form className={styles.loginForm} action={loginAciton}>
                    <input type="email" name="email" value={formValues.email} onChange={changeHandler} placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    {error && <h6 className={styles.errorText}>{error}!</h6>}
                    <button type="submit" className={styles.loginBtn}>Log in</button>
                </form>
            </div>
        </>
    )
}