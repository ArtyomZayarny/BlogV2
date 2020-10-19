import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router,Switch,Route, NavLink} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import TodosPage from './containers/TodosPage';
import PostsPage from './containers/PostsPage';




export default function Blog(props) {
    

      return (
            <>
            <Router>
                <Container>
                    <NavLink to="/">
                        <h1>Blog</h1>
                    </NavLink>
                    <Navigation />
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/posts">
                            <PostsPage/>
                        </Route>
                        <Route path="/todos">
                            <TodosPage/>
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                    </Switch>
                </Container>
            </Router>
            </>
      )
}
