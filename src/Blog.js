import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import UsersPage from './containers/Users/UsersPage';
import PostsPage from './containers/Posts/PostsPage';
import UserPage from './containers/Users/UserPage';
import AlbumsPage from './containers/Albums/AlbumsPage';




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
                        <Route path="/users" exact>
                            <UsersPage />
                        </Route>
                        <Route path="/albums">
                            <AlbumsPage />
                        </Route>
                        <Route path="/users/:userId" >
                            <UserPage />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </>
    )
}

