import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../../hooks/useData';

// import Swiper core and required components
import SwiperCore, { Navigation, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

export default function AlbumPage(props) {
	const { albumId } = useParams();
	const [album, load] = useData(`/albums/${albumId}`)
	const [photos, isFetching] = useData(`/photos?albumId=${albumId}`);

	// install Swiper components
	SwiperCore.use([Navigation]);

	return (
		<>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2">
						Album : {album.title}
					</Typography>
					{isFetching ? "Loading ....." : photos.length > 0 && <Swiper
						spaceBetween={50}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
					>
						{photos.map((photo) => {
							return <SwiperSlide><a href={photos.url} key={photo.id}><img src={photo.thumbnailUrl} /></a></SwiperSlide>
						})}
					</Swiper>}
				</CardContent>
			</Card>
		</>
	)
}
