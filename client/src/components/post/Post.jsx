import logoImg from '../../assets/logo.png';
import styles from './post.module.css';

import { useActionState, useContext, useState } from 'react';
import { useCreatePost } from '../../api/postsApi.js';
import { UserContext } from '../../contexts/UserContext.js';


export default function Post({
    closeModal
}){
    const [formValues, setFormValues] = useState({
        title: '', 
        image: '', 
        description: ''
    });

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

        try{
            const postData = {
                title: values.title,
                image: values.image,
                description: values.description
            }
            
            await createPost(postData, accessToken);

            closeModal()

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
        <img src={logoImg} alt="logo" className={styles.postLogoImg}/>
        <h1 className={styles.title}>What's on your mind?</h1>
            <div className={styles.postContainer}>
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