import pfpImage from '../../assets/profile.png'

import { Link } from 'react-router'
import styles from './home.module.css'
import Sidebar from '../sidebar/Sidebar.jsx'
import { useGetPosts } from '../../api/postsApi.js'

export default function Home(){

    const { posts } = useGetPosts();

    return (
        <div className={styles.container}>
        <Sidebar/>
        <main className={styles.feed}>
        <h1 className={styles.title}>Latest</h1>
        
        {posts.length === 0 
        ? <div className={styles.noPosts}>
        <p className={styles.noPostsText}>There are no posts yet, be the first one!</p>
        </div>
        :
            posts.map(post =>
            <div className={styles.post} key={post?._id}>
                <div className={styles.postHeader}>
                    <img src={!!post.owner.profilePicUrl ? post.owner.profilePicUrl : pfpImage} alt="Profile Picture" className={styles.profilePicPost}/>
                    <span className={styles.username}>{post.owner.username}</span>
                </div>
                <p className={styles.postText}>{post.title}</p>
                <Link to={`/${post._id}/details`}>
                <button className={styles.readMore}>read more...</button>
                </Link>
            </div>
        )
        }

            
        </main>
    </div>
    )
}