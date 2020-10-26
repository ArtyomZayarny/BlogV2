import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import UsersPage from './containers/Users/UsersPage';
import AboutPage from './containers/AboutPage';
import PostsPage from './containers/Posts/PostsPage';
import UserPage from './containers/Users/UserPage';




export default function Blog(props) {


    return (
        <>
            <Router>
                <Container>
                    <NavLink to="/">
                        <h1>BlogV2</h1>
                    </NavLink>
                    <Navigation />
                    <Switch>
                        <Route path="/" exact>
                            <PostsPage />
                        </Route>
                        <Route path="/users">
                            <UsersPage />
                        </Route>
                        <Route path="/albums">
                            <AboutPage />
                        </Route>
                        <Route path="/users/:userId">
                            <UserPage />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </>
    )
}

