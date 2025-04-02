import pfpImage from '../../assets/profile.png';
import searchImage from '../../assets/search.png';

import { Link } from 'react-router';
import styles from './search.module.css';
import Sidebar from '../sidebar/Sidebar.jsx';
import { useGetPosts } from '../../api/postsApi.js';
import { useState } from 'react';

export default function Search(){

    const { posts } = useGetPosts();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.owner.username.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.feed}>

            <div className={styles.searchContainer}>
                    <img src={searchImage} alt="Search Icon" className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchBar}
                    />
                </div>

                {filteredPosts.length > 0 && (
                <h2 className={styles.resultsText}>Results</h2>
                )} 

                {filteredPosts.length === 0 ? (
                    <div className={styles.noPosts}>
                        <p className={styles.noPostsText}>
                            No posts match your search.
                        </p>
                    </div>
                ) : (
                    filteredPosts.map((post) => (
                        <div className={styles.post} key={post?._id}>
                            <div className={styles.postHeader}>
                                <img
                                    src={
                                        !!post.owner.profilePicUrl
                                            ? post.owner?.profilePicUrl
                                            : pfpImage
                                    }
                                    alt="Profile Picture"
                                    className={styles.profilePicPost}
                                />
                                <Link to={`/${post._ownerId}/profile`}>
                                    <span className={styles.username}>
                                        {post.owner?.username}
                                    </span>
                                </Link>
                            </div>
                            <p className={styles.postText}>{post.title}</p>
                            <Link to={`/${post._id}/details`}>
                                <button className={styles.readMore}>
                                    read more...
                                </button>
                            </Link>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}