import React, {useContext} from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';
import { StoreContext} from 'contexts/StoreContext'



function Home(props) {
  //const {store} = props;
  let {postId} = useParams(); // the variable name has to match the parameter name
  let {
    posts, users, comments, likes, currentUserId, 
    addComment, addLike, removeLike
  } = useContext(StoreContext);


  function findUser(post){
    return users.find(user=>user.id===post.userId);
  }

  function findComments(post){
    return comments.filter(comment=>comment.postId===post.id);
  }

  function findLikes(post){
    let postLikes = likes.filter(like=>like.postId===post.id);
    return {
      self: postLikes.some(like=> like.userId===currentUserId),
      count: postLikes.length
    }
  }

  const filtered = posts.filter(post=>post.id===postId);

	return (
		<div>
      
      { filtered.length > 0 ?
          filtered.map(post=>
				  <Post
	        key={post.id}
	        user={findUser(post)}
	        post={post}
	        comments={findComments(post)}
          likes={findLikes(post)}
          onLike={addLike}
          onUnlike={removeLike}
          onComment={addComment}
        />
        )
        :
        posts.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
        .map(post=>
          <Post
            key={post.id}
            user={findUser(post)}
            post={post}
            comments={findComments(post)}
            likes={findLikes(post)}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />
          )
      }
    </div>
	);
}

export default Home;
