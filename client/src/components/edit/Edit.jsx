import logoImg from '../../assets/logo.png';

import { Navigate, Link, useNavigate, useParams } from 'react-router';
import styles from './edit.module.css'
import { useEditPost, usePost } from '../../api/postsApi.js';
import { useActionState, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext.js';

export default function Edit(){

    const navigate = useNavigate();

    const params = useParams();
    
    const postId = params.postId;

    const post = usePost(postId);

    const {editPost} = useEditPost();

    const [error, setError] = useState(null);

    const editFormHandler = async (_, formData) => {
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
            
            await editPost(postData, postId);

            navigate(`/${post._id}/details`);
        }catch(err){
            setError(err.message);
        }
    }

    const [_, editAction] = useActionState(editFormHandler, {title: '', image: '', description: ''});


    return(
    <>
     <div className={styles.postContainer}>
            <Link to={`/${post._id}/details`}><img src={logoImg} alt="logo" className={styles.postLogoImg}/></Link>
                <h1 className={styles.title}>Edit your post</h1>
                <form className={styles.postForm} action={editAction}>
                    <span>Title</span>
                    <input type="text" name="title" defaultValue={post.title}/>
                    <span>Image URL (optional)</span>
                    <input type="text" name="image" defaultValue={post?.image} placeholder="https://..." />
                    <span>Description</span>
                    <textarea name="description" defaultValue={post.description}></textarea>
                    {error && <h6 className={styles.errorText}>{error}!</h6>}
                    <button type="submit" className={styles.postBtn}>Edit</button>
                </form>
            </div>
    </>);
}