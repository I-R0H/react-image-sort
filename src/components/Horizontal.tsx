import React, { useState } from "react";
import faker from 'faker/locale/ja';
import styled from 'styled-components'
import { ReactSortable } from 'react-sortablejs';

type Image = { id: number, imageUrl: string }

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const image: Image = {
    id: k,
    imageUrl: faker.image.animals()
  };

  return image;
});

export const Horizontal: React.FC = () => {
  const [images, setImages] = useState<Image[]>(initial);

  return (
    <Wrapper>
      <div>
        {images.map(image => image.id)}
      </div>
      <StyledReactSortable list={images} setList={setImages} animation={150}>
        {images.map(image => (
          <div key={image.id}>
            <img src={image.imageUrl} alt={image.imageUrl} width="100%" />
          </div>
        ))}
      </StyledReactSortable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
`
const StyledReactSortable = styled(ReactSortable)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 300px;
  gap: 16px;
  overflow: scroll;
`
