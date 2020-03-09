import React, { useState } from 'react';
import css from './App.module.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import NewPost from './NewPost';
import Activity from './Activity';
import Explore from './Explore';
import initialStore from 'utils/initialStore';
import uniqueId from 'utils/uniqueId';

function App() {
  const [page, setPage] = useState('home');
  const [store, setStore] = useState(initialStore);

  function renderMain(page) {
    switch(page){
      case 'home':
        return <Home store={store} onLike={addLike} onUnlike={removeLike} onComment={addComment}/>;
      case 'explore':
        return <Explore/>;
      case 'newpost':
        return <NewPost store={store} addPost={addPost} cancelPost={cancelPost} />;
      case 'activity':
        return <Activity/>;
      case 'profile':
        return <Profile/>;
      default:
        return <Home/>;
    }
  }

  function addLike(postId){
    const like = {
        userId: store.currentUserId, 
        postId,
        datetime: new Date().toISOString()
    };
    
    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }

  function removeLike(postId){
    // use filter and currentUserId to remove the like from the likes array
    //const like = {
    //  userId: store.currentUserId, 
    //  postId,
    //  datetime: new Date().toISOString()
    //};
    
    setStore({
      ...store,
      likes: store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId))
    });
  }

  function addComment(postId, text){
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }

  function addPost(photo, desc){
		// TODO:
		// 1. Create a new post object (use uniqueId('post') to create an id)
		// 2. Update the store 
    // 3. Call setPage to come back to the home page
    const post = {
      id: uniqueId('post'),
      userId: store.currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      posts: store.posts.concat(post)

    })
    setPage('home');
  }

  function cancelPost(){
		// TODO:
    // 1. Call setPage to come back to the home page (we will use Router to improve this)
    setPage('home');
	}

  return (
    <div className={css.container}>
	    <Header/>
      <main className={css.content}>
        {renderMain(page)}        
      </main>
      <Navbar onNavChange={setPage}/>
    </div>
  );
}

export default App;
