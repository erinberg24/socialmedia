import React from 'react';
import css from './Profile.module.css'; 
import PostThumbnail from './PostThumbnail.js';
import publicUrl from 'utils/publicUrl';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';


function Profile(props) {
  const {store} = props;
  

  /*let {userId} = useParams();
  {
    
  const user = userId ?
  `store.users.find(user=>user.id===userId)` : `store.users.find(user=>user.id===store.currentUserId)`;
  }
  */


  const userId = store.currentUserId;
  const user = store.users.find(user=>user.id===store.currentUserId)
  const posts = store.posts.filter(post=>(post.userId===userId));
  const followers = store.followers.filter(follower=>(follower.userId===userId))
  const following = store.followers.filter(follower=>(follower.followerId===userId))

  return (
    <article className={css.profile}>
        <header className={css.header}>
          <div className={css.user}>
            <img src={publicUrl(user.photo)} alt='Profile'/> 
            <span >{user.id}</span>
            <button className={css.followBtn}>Follow</button>
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
