import { ImageRenderStyled } from '../ImageRender/ImageRenderStyled';
const ImageRender = imagedata => {
	const { alt_description, id, urls } = imagedata.itemData;
	// console.log(imagedata.itemData, 'image');
	return <ImageRenderStyled key={id} src={urls.thumb} alt={alt_description} />;
};

export { ImageRender };
