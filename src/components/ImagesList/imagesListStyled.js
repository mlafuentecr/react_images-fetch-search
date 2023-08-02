import styled from 'styled-components';

const ImagesListStyled = styled.div`
  background-color: rgb(214, 226, 195);
  padding: 10px;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5rem;

  & .imageRender{
  border: 1px solid gray;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export {ImagesListStyled};
