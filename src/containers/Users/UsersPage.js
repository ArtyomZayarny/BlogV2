import React from 'react'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import useData from '../../hooks/useData'
import { Link } from 'react-router-dom'

export default function UsersPage(props) {
    const [users, isFetching] = useData(`/users`);

    return (
        <>
            <h2>Users page</h2>
            { isFetching ? 'Loading...' :

                <List>
                    {users.map((item) => {
                        return <Link to={`/users/${item.id}`} key={item.id}>
                            <ListItemText primary={item.name} />
                        </Link>
                    })}
                </List>
            }
        </>
    )
}
