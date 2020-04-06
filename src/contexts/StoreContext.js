import React, {createContext, useState, useEffect} from 'react';
import uniqueId from 'utils/uniqueId.js';
//import initialStore from 'utils/initialStore.js';
import * as firebase from 'firebase'; 
import 'firebase/auth';
import 'firebase/database';
import { useHistory } from 'react-router-dom';


// export the context so that other components can import
export const StoreContext = createContext(); 

function StoreContextProvider(props){

    // const [store, setStore] = useState(initialStore);

    // const [store, setStore] = useState(()=>{
    //     return JSON.parse(window.localStorage.getItem('store')) || initialStore;
    // });

    // useEffect(()=>{
    //     window.localStorage.setItem('store', JSON.stringify(store));
    // }, [store]);

    const [currentUserId, setCurrentUserId] = useState('erin'); // or 'erin'
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();

    const firebaseConfig = {
      apiKey: "AIzaSyDvGwbJUelrbLAcoWg8B0tWCZC6gyqO7KU",
      authDomain: "social-media-10e37.firebaseapp.com",
      databaseURL: "https://social-media-10e37.firebaseio.com",
      projectId: "social-media-10e37",
      storageBucket: "social-media-10e37.appspot.com",
      messagingSenderId: "947534729063",
      appId: "1:947534729063:web:4bc115671e2a58edeaa9c2"
    };
    
    // Initialize Firebase
    //if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
   // }
    const db = firebase.firestore();

    function login(email, password){
      firebase.auth.signInWithEmailAndPassword(email,password).then((response)=>{
        db.collection('users').where('email','==', response.user.email).get().then(snapshot=>{
          setCurrentUserId(snapshot.docs[0].data().id);
        })
      }).catch(error=>{
        setCurrentUserId(null);
      })
      history.push('/');
    }

    function signup(email, password, bio, id, name, photo){
      const user = {
        email, id, name, bio, photo
      };
      firebase.auth.createUserWithEmailAndPassword(email, password).then(()=>{
        // add a user to the firestore database
        db.collection('users').add(user);
        
        // add a user to the app state
        setUsers(users.concat(user));
        
        // set the user as a current user 
        setCurrentUserId(id);
        
        // route to home
        history.push('/');
      })
    }

    function addLike(postId){
        const like = {
            userId: currentUserId, 
            postId,
            datetime: new Date().toISOString()
        };

        setLikes(likes.concat(like));
        //Firestore update
        db.collection('likes').add(like);
        
        //setStore({
          // ...store,
          // likes: store.likes.concat(like)
       // });
      }
    
      function removeLike(postId){  
        // setStore({
        //   ...store,
        //   likes: store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId))
        // });

        setLikes(likes.filter(like => !(like.userId === currentUserId && like.postId === postId)));

        db.collection('likes').where('userId', '==', currentUserId).where('postId', '==', postId).get().then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));

      }
    
      function addComment(postId, text){
        const comment = {
          userId: currentUserId, 
          postId,
          text,
          datetime: new Date().toISOString()
        };

        setComments(comments.concat(comment));
        //Firestore update
        db.collection('comments').add(comment);

        // setStore({
        //   ...store,
        //     comments:store.comments.concat(comment)
        // });
      }
    
      function addPost(photo, desc){
            // TODO:
            // 1. Create a new post object (use uniqueId('post') to create an id)
            // 2. Update the store 
        // 3. Call setPage to come back to the home page
        const post = {
          id: uniqueId('post'),
          userId: currentUserId,
          photo,
          desc,
          datetime: new Date().toISOString()
        };

        setPosts(posts.concat(post));
        //Firestore update
        db.collection('posts').add(post);

        // setStore({
        //   ...store,
        //   posts: store.posts.concat(post)
    
        // })
      }
      
      function addFollower(userId, followerId){
        // setStore({
        //   ...store,
        //   followers: store.followers.concat({userId, followerId})
        // });
        setFollowers(followers.concat({userId, followerId}));
        //Firestore update
        db.collection('followers').add({userId, followerId});

      }
    
      function removeFollower(userId, followerId){
        //   setStore({
        //   ...store,
        //   followers: store.followers.filter(follower=>follower.userId!==userId && follower.followerId!==followerId)
        // });

        setFollowers(followers.filter(follower => !(follower.userId === userId && follower.followerId === followerId)));

        db.collection('followers').where('userId', '==', userId).where('followerId', '==', followerId).get().then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));
        

      }

  useEffect(()=>{
    db.collection('users').get().then(snapshot=>{
      const users = snapshot.docs.map(d=>d.data());
      setUsers(users);
    });
    db.collection('posts').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
    db.collection('likes').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
    db.collection('followers').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
    db.collection('comments').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
  }, []);

	return (
        <StoreContext.Provider value = {{login, addComment, addLike, removeLike, addPost, addFollower, removeFollower}}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider; // export this component as default