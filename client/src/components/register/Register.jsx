import { useContext, useState } from 'react';
import { useRegister } from '../../api/authApi.js';
import { UserContext } from '../../contexts/UserContext.js';
import { useNavigate } from 'react-router';

import logoImg from '../../assets/logo.png'
import styles from './register.module.css'
import { useSaveUser } from '../../api/usersApi.js';


export default function Register({
    closeModal
}){
    const navigate = useNavigate()
    const {userLoginHandler} = useContext(UserContext);
    const { register } = useRegister();
    const { saveUser } = useSaveUser()

    const [formValues, setFormValues] = useState({
        profilePicUrl: '',
        username: '',
        bio: '',
        email: '',
    });
    const [error, setError] = useState(null);

    const registerFormHandler = async (formData) => {
        const {profilePicUrl, username, bio, email, password, rePassword } = Object.fromEntries(formData);

        if(username === '' || email === '' || password === '' || rePassword === '' ){
            setError("All required fields must be filled");
            return;
        }
        if(password !== rePassword){
            setError("Passwords don\'t match");
            return;
        }

        try{
            const authData = await register(email, password, username, profilePicUrl, bio);

            await saveUser(authData);

            userLoginHandler(authData);
            
            closeModal();

            navigate('/home');
        }catch(err){
            setError(err.message);
        }
    }

    const changeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}))
    }
    return (
        <>   
            <img src={logoImg} alt="logo" className={styles.registerLogoImg}/>
            <h1 className={styles.title}>Create your account</h1>
            <div className={styles.registerContainer}>
            <form action={registerFormHandler} className={styles.registerForm}>
                <input type="text" name="profilePicUrl" value={formValues.profilePicUrl} onChange={changeHandler} placeholder="Profile picture link (optional)" />
                <input type="text" name="username" value={formValues.username} onChange={changeHandler} placeholder="Username" />
                <input type="email" name="email" value={formValues.email} onChange={changeHandler} placeholder="Email" />
                <input type="text" name="bio" value={formValues.bio} onChange={changeHandler} placeholder="Bio (optional)" />
                <input type="password" name="password" minLength="6" placeholder="Password" />
                <input type="password" name="rePassword" minLength="6" placeholder="Confirm password" />
                {error && <h6 className={styles.errorText}>{error}!</h6>}
                <button type="submit" className={styles.signupBtn}>Sign Up</button>
            </form>
            </div>
        </>
    )
}