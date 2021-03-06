import React, {createContext, useState} from 'react';
import uniqueId from 'utils/uniqueId.js';
import initialStore from 'utils/initialStore.js';

// export the context so that other components can import
export const StoreContext = createContext(); 

function StoreContextProvider(props){

    const [store, setStore] = useState(initialStore);

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
      }
      
      function addFollower(userId, followerId){
        setStore({
          ...store,
          followers: store.followers.concat({userId, followerId})
        });
      }
    
      function removeFollower(userId, followerId){
          setStore({
          ...store,
          followers: store.followers.filter(follower=>follower.userId!==userId && follower.followerId!==followerId)
        });
      }

	return (
        <StoreContext.Provider value = {{...store, addComment, addLike, removeLike, addPost, addFollower, removeFollower}}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider; // export this component as default