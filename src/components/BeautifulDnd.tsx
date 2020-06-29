import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import faker from 'faker/locale/ja';
import { arrayMove } from "react-sortable-hoc";
import styled from 'styled-components'

type Image = { id: number, imageUrl: string }

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const image: Image = {
    id: k,
    imageUrl: faker.image.animals()
  };

  return image;
});

const Image = ({ image, index }: { image: Image, index: number}) => {
  return (
    <Draggable draggableId={String(image.id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img src={image.imageUrl} alt={image.imageUrl} width={300} height={200}/>
        </div>
      )}
    </Draggable>
  );
};

export const BeautifulDnd = () => {
  const [images, setImages] = useState<Image[]>(initial);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newImages = arrayMove(
      images,
      result.source.index,
      result.destination.index
    );

    setImages(newImages);
  }

  return (
    <div>
      <div>
        {images.map(image => image.id)}
      </div>
      <ScrollContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list" direction="horizontal">
            {provided => (
              <ImageList ref={provided.innerRef} {...provided.droppableProps}>
                {images.map((image: Image, index: number) => (
                  <Image image={image} index={index} key={image.id} />
                ))}
                {provided.placeholder}
              </ImageList>
            )}
          </Droppable>
        </DragDropContext>
      </ScrollContainer>
    </div>
  );
};

const ScrollContainer = styled.div`
  overflow: scroll;
`
const ImageList = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  width: fit-content;
`
