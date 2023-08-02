import React, { useContext, useState } from 'react';
import { ImagesListStyled } from './imagesListStyled';
import { ImageRender } from '../ImageRender';
import { SearchContext } from '../../hooks/SearchContext';

export default function ImagesList() {
	const { searchobj } = useContext(SearchContext);
	return <ImagesListStyled>{Object.keys(searchobj).length === 0 ? '' : searchobj.map((itemData, index) => <ImageRender key={index} itemData={itemData} />)}</ImagesListStyled>;
}
