import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SearchContext } from '../../hooks/SearchContext';
import { SearchStyled } from './SearchStyled';
export default function ImagesList() {
	const baseURL = 'https://api.unsplash.com/search/photos';
	const clientId = 'iCxEwOp0QkggOnGU1XP7SRLNQArxL5pBV84YJAadDHQ';
	const [search, setSearch] = useState('');
	const [searchInput, setsearchInput] = useState('');
	const { searchobj, setSearchobj } = useContext(SearchContext);

	useEffect(() => {
		console.log(search, 'search');
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
					setSearchobj(...[response.data.results]);
					console.log(searchobj);
				}
			});
	}, [search]);

	function handleChange(e) {
		e.preventDefault();
		console.log(e.target.value);
		setsearchInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSearch(searchInput);
		setsearchInput('');
	}

	return (
		<SearchStyled>
			<form onSubmit={handleSubmit}>
				<input type='text' name='search' id='search' onChange={e => handleChange(e)} value={searchInput} placeholder='Search Term' />
			</form>
		</SearchStyled>
	);
}
