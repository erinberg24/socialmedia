import React from 'react';
import css from './App.module.css';
import Header from './Header.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 'home'};
  }

  setPage(props) {
    this.setState(state => ({
      page: props
    }));
  }

  render() {
    return (
      <div className={css.container}>
	      <Header/>
        <main className={css.content}>
          {renderMain(this.state.page)}        
        </main>
        <Navbar onNavChange={setPage}/>
        <main>
	        <Home/>
        </main>
        <Navbar/>
      </div>
    );
  }
}

export default App;
