import {useState, useEffect} from 'react';
import {apiClient} from '../apiClient'


export default function useData(path) {
    const [data,setData] = useState([]);
    const [fetching, setFetching] = useState(false)
     
    useEffect( () => {
        setFetching(true)
        apiClient.get(path)
        .then( (res) => {
                setFetching(false)
                setData(res.data)
        })

    },[path])
    return [data,fetching]

}