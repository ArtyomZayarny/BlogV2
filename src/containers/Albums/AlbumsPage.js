import React from 'react'
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

export default function AlbumsPage(props) {
    const [albums, isFetching] = useData(`/albums`);

    return (
        <>
            <h2>Albums page</h2>
            { isFetching ? 'Loading...' :

                <List>
                    {albums.map((album) => {
                        return <Link to={`/users/${album.userId}/albums/${album.id}`} key={album.id}>
                            <ListItemText primary={album.title} />
                        </Link>
                    })}
                </List>
            }
        </>
    )
}
