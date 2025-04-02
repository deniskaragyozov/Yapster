import pfpImage from '../../assets/profile.png';
import editImage from '../../assets/edit.png';
import deleteImage from '../../assets/delete.png';
import commentImage from '../../assets/comment.png';
import likeImage from '../../assets/like.png';
import likedImage from '../../assets/likeGreen.png';

import styles from './details.module.css';
import { Link, useParams } from 'react-router';
import { usePost } from '../../api/postsApi.js';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext.js';
import { LikesContext } from '../../contexts/LikesContext.js';
import { CommentsContext } from '../../contexts/CommentsContext.js';


export default function Details() {
    const params = useParams();

    const postId = params.postId;

    const post = usePost(postId);

    const user = useContext(UserContext);

    const isLoggedin = !!user.email;

    const isOwner = user._id === post._ownerId;

    const likes = useContext(LikesContext);

    const postLikes = likes[postId] || [];

    const hasLiked = !!postLikes ? postLikes.includes(user._id) : false;

    const comments = useContext(CommentsContext);

    const postComments = comments[postId] || [];

    return (
        <div className={styles.container}>
            <Link to="/home"><button className={styles.backButton}>← Back</button></Link>
            <main className={styles.feed}>
                <h1>Post</h1>
                <div className={styles.post}>
                    <div className={styles.postHeader}>
                        <img src={!!post.owner?.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost} />
                        <Link to={`/${post._ownerId}/profile`}><span className={styles.username}>{post.owner?.username}</span></Link>
                    </div>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postText}>{post.description}</p>
                    {!!post.image
                        ? <img src={post.image} alt="Post Picture" className={styles.postImage} />
                        : null
                    }
                    <div className={styles.postFooter}>
                        <span className={styles.postComments}>Likes: {postLikes.length}</span>
                        <span className={styles.postComments}>Comments: {postComments.length}</span>
                        {isOwner ? (
                            <>
                                <div className={styles.postActions}>
                                    {!hasLiked
                                    ? <Link to={`/${post._id}/like`}><img src={likeImage} alt="Like Icon" className={styles.likeImage} /></Link>
                                    : <Link to={`/${post._id}/like`}><img src={likedImage} alt="Like Icon" className={styles.likeImage} /></Link>
                                    }
                                    <Link to={`/${post._id}/comment`}><img src={commentImage} alt="Comment Icon" className={styles.commentImage} /></Link>
                                    <Link to={`/${post._id}/edit`}><img src={editImage} alt="Edit Icon" className={styles.editImage} /></Link>
                                    <Link to={`/${post._id}/delete`}><img src={deleteImage} alt="Delete Icon" className={styles.deleteImage} /></Link>
                                </div>
                            </>
                        ) : <></>}

                        {isLoggedin && !isOwner
                            ?
                            <div className={styles.postActions}>
                                {!hasLiked
                                    ? <Link to={`/${post._id}/like`}><img src={likeImage} alt="Like Icon" className={styles.likeImage} /></Link>
                                    : <Link to={`/${post._id}/like`}><img src={likedImage} alt="Like Icon" className={styles.likeImage} /></Link>
                                }
                                <Link to={`/${post._id}/comment`}><img src={commentImage} alt="Comment Icon" className={styles.commentImage} /></Link>
                            </div>
                            : <></>}
                    </div>
                </div>

                <div className={styles.commentsSection}>
                    <h2 className={styles.commentsTitle}>Comments</h2>
                    {
                        postComments.length === 0
                            ? <h1 className={styles.noComments}>No comments yet</h1>
                            : postComments.map((comment, index) =>
                                <div className={styles.comment} key={index}>
                                    <div className={styles.commentHeader}>
                                    <img src={!!comment.owner?.profilePicUrl ? comment.owner.profilePicUrl : pfpImage} alt="Commenter Profile" className={styles.commentProfilePic} />
                                    <Link to={`/${comment.owner.id}/profile`} > <span className={styles.commentUsername}>{comment.owner.username}</span> </Link>
                                    </div>
                                    <p className={styles.commentText}>{comment.content}</p>
                                </div>
                            )
                    }
                </div>
            </main>
        </div>
    );
}