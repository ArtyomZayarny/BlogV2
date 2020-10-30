import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../../hooks/useData';

export default function AlbumPage(props) {
	const { albumId } = useParams();
	const [album, load] = useData(`/albums/${albumId}`)
	const [photos, isFetching] = useData(`/photos?albumId=${albumId}`);



	return (
		<>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">
						Album : {album.title}
					</Typography>

					{isFetching ? "Loading..." : photos.map((photo) => {
						return <a href={photos.url} key={photo.id}><img src={photo.thumbnailUrl} /></a>
					})}
				</CardContent>
			</Card>
		</>
	)
}
