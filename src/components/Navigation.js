import React from 'react';
import { AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
      root: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
      link: {
            color: "#fff",
            textDecoration: 'none'
      }
    }));
export function Navigation(props) {
      const classes = useStyles();

      return (
            <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography className={classes.root}>
                        <NavLink to="/posts" className={classes.link}>
                            Posts
                        </NavLink>
                        <NavLink to="/todos" className={classes.link}>
                            Todos
                        </NavLink>
                        <NavLink to="/about" className={classes.link}>
                            About
                        </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>               
            </>
      )
}
