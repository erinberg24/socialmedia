import React /*, { useState }*/ from 'react';
import css from './App.module.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import NewPost from './NewPost';
import Activity from './Activity';
import Explore from './Explore';
import Login from './Login';
import Signup from './Signup';
import StoreContextProvider from 'contexts/StoreContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  //const [page, setPage] = useState('home');

/*   function renderMain(page) {
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
        return <Profile store={store}/>;
      default:
        return <Home store={store}
        onLike={addLike} 
        onUnlike={removeLike}
        onComment={addComment} 
         />;
    }
  } */

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
        <div className={css.container}>
        <Header/>
        <main className={css.content}>
        <Switch>
          <Route path="/profile/:userId?">
            <Profile />
          </Route>
          <Route path="/newpost">
            <NewPost />;
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path='/activity'>
            <Activity/>
          </Route>
          <Route path="/:postId?">
            <Home />
          </Route>
          <Route path="/login">
	          <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        </main>
        <Navbar/>
        </div>
      </StoreContextProvider>
    </Router>






	  /*    
        <main className={css.content}>
          {renderMain(page)}        
        </main>
        <Navbar onNavChange={setPage}/>
      </div>
    </Router>
    */
  );
}

export default App;
