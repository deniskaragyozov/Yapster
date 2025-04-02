import logoImg from '../../assets/logo.png';
import styles from './post.module.css';

import { useActionState, useContext, useState } from 'react';
import { useCreatePost } from '../../api/postsApi.js';
import { UserContext } from '../../contexts/UserContext.js';
import { Link, useNavigate } from 'react-router';

export default function Post(){
    const [formValues, setFormValues] = useState({
        title: '', 
        image: '', 
        description: ''
    });

    const navigate = useNavigate();

    const user = useContext(UserContext);

    const { accessToken } = useContext(UserContext);

    const { createPost } = useCreatePost();

    const [error, setError] = useState(null);

    const postFormHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        if(values.title === '' || values.description === ''){
            setError("Title and description are required");
            return;
        }

        if(values.title.length < 2){
            setError("Title should be at least 2 characters long");
            return;
        }

        if(values.description.length < 15){
            setError("Description should be at least 15 characters long");
            return;
        }

        if(values.description.length > 900){
            setError("Description should be less than 900 characters long");
            return;
        }

        try{
            const postData = {
                title: values.title,
                image: values.image,
                description: values.description,
                owner: user
            }
            
            await createPost(postData, accessToken);

            navigate('/');
        }catch(err){
            setError(err.message);
        }
    }

    const [_, postAction] = useActionState(postFormHandler, {title: '', image: '', description: ''});


    const changeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    return (
        <>
        <div className={styles.postContainer}>
            <Link to="/"><img src={logoImg} alt="logo" className={styles.postLogoImg}/></Link>
                <h1 className={styles.title}>What's on your mind?</h1>
                <form className={styles.postForm} action={postAction}>
                    <span>Title</span>
                    <input type="text" name="title" value={formValues.title} onChange={changeHandler}/>
                    <span>Image URL (optional)</span>
                    <input type="text" name="image" value={formValues.image} onChange={changeHandler} placeholder="https://..." />
                    <span>Description</span>
                    <textarea name="description" value={formValues.description} onChange={changeHandler}></textarea>
                    {error && <h6 className={styles.errorText}>{error}!</h6>}
                    <button type="submit" className={styles.postBtn}>Post</button>
                </form>
            </div>
        </>
    )
}