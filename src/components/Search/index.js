import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../hooks/SearchContext';
import { SearchStyled } from './SearchStyled';
export default function ImagesList() {
	const { search, setSearch } = useContext(SearchContext);
	const [searchInput, setsearchInput] = useState('');
	//get firebase post
	useEffect(() => {
		// declare the data fetching function
		// const fetchData = async () => {
		// 	const postsCol = collection(db, 'posts');
		// 	const postSnapshot = await getDocs(postsCol);
		// 	const postList = postSnapshot.docs.map(doc => ({
		// 		id: doc.id,
		// 		data: doc.data(),
		// 	}));
		// 	return postList;
		// };
		//call api to get post
		// fetchData()
		// 	.then(result => setSearchTerm([...result]))
		// 	.catch(console.error);
	}, []);

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
