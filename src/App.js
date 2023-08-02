import { useState } from 'react';
import { SearchContext } from './hooks/SearchContext';
import './App.css';
import ImagesList from './components/ImagesList';
import Search from './components/Search';

function App() {
	const [searchobj, setSearchobj] = useState('');
	const SearchState = { searchobj, setSearchobj };

	return (
		<SearchContext.Provider value={SearchState}>
			<div className='App'>
				<Search />
				<ImagesList />
			</div>
		</SearchContext.Provider>
	);
}

export default App;
