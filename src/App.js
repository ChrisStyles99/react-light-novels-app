import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NovelForm from './components/NovelForm';
import NovelList from './components/NovelList';
import Posts from './components/Posts';
import SearchNovel from './components/SearchNovel';
import NovelContextProvider from './context/NovelContext';

function App() {
  return (
    <div className="App container">
      <NovelContextProvider>
        <Router>
          <Navbar className=""/>
          <Switch>
            <Route exact path="/">
              <NovelForm />
              <NovelList />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/search">
              <SearchNovel />
            </Route>
          </Switch>
        </Router>
      </NovelContextProvider>      
    </div>
  );
}

export default App;