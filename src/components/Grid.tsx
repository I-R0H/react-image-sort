import React, { MouseEventHandler } from 'react';
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

  const onContextMenu: MouseEventHandler<HTMLImageElement> = (e) => e.preventDefault()

  return (
    <Wrapper>
      <div>{images.map(image => image.id)}</div>
      <StyledReactSortable list={images} setList={setImages} animation={150} delay={200}>
        {images.map(image => (
            <Sortable key={image.id}>
              <img src={image.imageUrl} alt={image.imageUrl} width="100%" onContextMenu={onContextMenu} />
            </Sortable>
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
    grid-template-columns: repeat(auto-fit, 100px);
    grid-gap: 16px;
    justify-content: space-evenly;
`

const Sortable = styled.div`
  &.sortable-chosen {
    width: 80%;
    display: flex;
    align-self: center;
    justify-self: center;
  }
`
