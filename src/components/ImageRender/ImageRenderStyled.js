import styled from 'styled-components';

const ImageRenderStyled = styled.img`
	min-width: 100%;
	height: fit-content;
	padding: 5px;
	@media (min-width: 700px) {
		min-width: 40%;
	}
	@media (min-width: 1000px) {
		min-width: 240px;
	}
`;

export { ImageRenderStyled };
