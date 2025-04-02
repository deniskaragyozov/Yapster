import { useActionState, useContext, useState } from 'react';
import { usePost } from '../../api/postsApi.js';
import logoImg from '../../assets/logo.png';
import styles from './comment.module.css';

import { Link, useNavigate, useParams } from 'react-router';
import { CommentsContext } from '../../contexts/CommentsContext.js';
import { UserContext } from '../../contexts/UserContext.js';

export default function Comment() {

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
            comment: '', 
        });
    
    const { commentHandler } = useContext(CommentsContext);

    const params = useParams();
    
    const postId = params.postId;

    const post = usePost(postId);

    const user = useContext(UserContext);

    const [error, setError] = useState(null);

    const commentFormHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        if(values.comment === ''){
            setError("Comment can\'t be empty");
            return;
        }

        if(values.comment.length > 900){
            setError("Description should be less than 900 characters long");
            return;
        }

        commentHandler(postId, {
            content: values.comment,
            owner: {
                username: user.username,
                profilePicUrl: user.profilePicUrl,
                id: user._id
            }
        });

        navigate(`/${post._id}/details`);
    }

    const [_, commentAction] = useActionState(commentFormHandler, { comment: '' });

    const changeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }
    return (
        <div className={styles.postContainer}>
            <Link to={`/${post._id}/details`}><img src={logoImg} alt="logo" className={styles.postLogoImg}/></Link>
                <h1 className={styles.title}>What would you like to comment?</h1>
                <form className={styles.postForm} action={commentAction} >
                    <span>Comment</span>
                    <textarea name="comment"></textarea>
                    {error && <h6 className={styles.errorText}>{error}!</h6>}
                    <button type="submit" className={styles.postBtn} defaultValue={formValues.comment} onChange={changeHandler}>Comment</button>
                </form>
            </div>
    )
}