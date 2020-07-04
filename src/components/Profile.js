import React, { useContext} from 'react';
import css from './Profile.module.css'; 
import PostThumbnail from './PostThumbnail.js';
import publicUrl from 'utils/publicUrl';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { StoreContext } from 'contexts/StoreContext';


function Profile(props) {
  //const {store} = props;
  let {userId} = useParams();
  let {
    posts, users, followers, currentUserId, 
    addFollower, removeFollower
  } = useContext(StoreContext);
  
  if (!userId) {
    userId = currentUserId;
  }

  const user = users.find(user=>user.id===userId)
  posts = posts.filter(post=>(post.userId===userId));
  followers = followers.filter(follower=>(follower.userId===userId))
  const following = followers.filter(follower=>(follower.followerId===userId))

  function handleFollow(){
    addFollower(userId, currentUserId);
  }

  function handleUnfollow(){
    removeFollower(userId, currentUserId)
  }

  return (
    <article className={css.profile}>
        <header className={css.header}>
          <div className={css.user}>
            <img src={publicUrl(user.photo)} alt='Profile'/> 
          </div>
          <div className={css.id}>
            <span >{user.id}</span>
            {userId!==currentUserId &&
              <div>
                {followers.some(follower=>follower.followerId===currentUserId)?
                <button className={css.unfollowBtn} onClick={handleUnfollow}>Unfollow</button>
                :
                <button className = {css.followBtn} onClick={handleFollow}>Follow</button>
              }
              </div>
            }
          </div>
        </header>
        <section className={css.description}>
          <span> {user.name}</span>
          <div>{user.bio}</div>
        </section>
        <section className={css.followers}>
          <hr></hr>
          <span>
            <div className={css.followItem}>
              <div className={css.followNumber}>
                {posts.length}
              </div>
              <div className={css.followTitle}>
                posts
              </div>
            </div>
            <div className={css.followItem}>
              <div className={css.followNumber}>
                {following.length}
              </div>
              <div className={css.followTitle}>
                following
              </div>
            </div>
            <div className={css.followItem}>
              <div className={css.followNumber}>
                {followers.length}
              </div>
              <div className={css.followTitle}>
                followers
              </div>
            </div>
          </span>
        </section>
        <section className={css.posts}>
            {posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
            .map(post=>
              <Link to={'/'+ post.id}>
                <PostThumbnail key={post.id} post={post}/>
              </Link>)}
        </section>
    </article>
  );
}

export default Profile;
