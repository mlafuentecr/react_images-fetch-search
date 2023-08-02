import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ImagesListStyled } from './imagesListStyled';
import { ImageRender } from '../ImageRender';
import { SearchContext } from '../../hooks/SearchContext';

export default function ImagesList() {
	const { search, setSearch } = useContext(SearchContext);
	const [apiData, setSearchData] = useState([]);
	const baseURL = 'https://api.unsplash.com/search/photos';
	const clientId = 'iCxEwOp0QkggOnGU1XP7SRLNQArxL5pBV84YJAadDHQ';
	//if search have changed
	useEffect(() => {
		axios
			.get(`${baseURL}`, {
				headers: {
					Authorization: `Client-ID ${clientId}`,
				},
				params: {
					query: search,
				},
			})
			.then(response => {
				if (response.data.total > 0) {
					setSearchData(...[response.data.results]);
				}
			});
	}, [search]);

	return <ImagesListStyled>{Object.keys(apiData).length === 0 ? '' : apiData.map((itemData, index) => <ImageRender key={index} itemData={itemData} />)}</ImagesListStyled>;
}
