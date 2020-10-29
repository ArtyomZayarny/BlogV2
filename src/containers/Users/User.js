import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useData from '../../hooks/useData';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import AlbumPage from '../AlbumPage';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "30%",
    marginRight: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  content: {
    width: "70%"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  userWrp: {
    display: "flex",
    width: "100%"
  }

});

export default function User({ name, email, phone, website, ...props }) {
  const classes = useStyles();
  const { city } = { ...props.address };
  const { name: companyName } = { ...props.company };
  let { path, url } = useRouteMatch();
  const [albums, isFetching] = useData(`/users/${props.id}/albums`)


  return (
    <div className={classes.userWrp}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {email}
          </Typography>
          <Typography variant="body2" component="p">
            {`Phone : ${phone}`}
          </Typography>
          <Typography variant="body2" component="p">
            {`Address : ${city}`}
          </Typography>
          <Typography variant="body2" component="p">
            {`Company : ${companyName}`}
          </Typography>
          <Typography variant="body2" component="p">
            <ul>
              {albums.length} Albums
              {albums.map((album) => {
                return <li><Link key={album.id} to={`${url}/albums/${album.id}`}>{album.title}</Link></li>
              })}
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <div className={classes.content}>
        <Switch>
          <Route path={`${path}/albums/:albumId`}>
            <AlbumPage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
User.defaultProps = {
  name: 'Timaz',
  email: 'artyom.zayarny@gmail.com',
  phone: '+380934333435',
  city: 'Odessa',
  companyName: "Epam"
}
