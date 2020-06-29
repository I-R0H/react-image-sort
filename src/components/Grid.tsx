import React from 'react';
import { ReactSortable } from "react-sortablejs";
import faker from 'faker';
import styled from 'styled-components'

type Image = { id: number, imageUrl: string }

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const image: Image = {
    id: k,
    imageUrl: faker.image.animals()
  };

  return image;
});

export function Grid() {
  const [images, setImages] = React.useState(initial);

  return (
    <Wrapper>
      <div>{images.map(image => image.id)}</div>
      <StyledReactSortable list={images} setList={setImages} animation={150}>
        {images.map(image => (
            <div key={image.id}>
              <img src={image.imageUrl} alt={image.imageUrl} width="100%" />
            </div>
        ))}
      </StyledReactSortable>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
`
const StyledReactSortable = styled(ReactSortable)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 16px;
`
