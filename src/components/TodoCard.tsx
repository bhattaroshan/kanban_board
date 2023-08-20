'use client'
import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

interface Props{
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element:HTMLElement|null)=>void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps|null|undefined;
}

function TodoCard({
    todo, index,id,innerRef,draggableProps, dragHandleProps
}:Props) {
  return (
    <div 
    className='bg-white rounded-md space-y-2 drop-shadow-md py-4 mt-4' 
    {...draggableProps} {...dragHandleProps} ref={innerRef}>
        <h1 className='px-4'>Hello there</h1>
    </div>
  )
}

export default TodoCard