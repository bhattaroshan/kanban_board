import { PlusCircleIcon } from '@heroicons/react/20/solid';
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard';

interface Props{
    id: TypedColumn;
    todos: Todo[];
    index: number;
}

function Column({id,todos,index}:Props) {
  return (
    <Draggable draggableId={id} index={index}>
        {(provided)=>{
            return <div 
                    {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                    >
                        <Droppable droppableId={index.toString()} type='card'>
                            {(provided,snapshot)=>{
                                return <div {...provided.droppableProps} ref={provided.innerRef}
                                        className={`p-2 rounded-2xl shadow-sm
                                        ${snapshot.isDraggingOver?'bg-green-200': 'bg-white/50'}`} 
                                >
                                    <h2>{id}</h2>
                                <div className='space-y-2'>
                                    {todos.map((todo,index)=>{
                                        return <Draggable key={todo.$id} draggableId={todo.$id} index={index}>
                                            {(provided)=>{
                                                return <TodoCard 
                                                    todo={todo}
                                                    index = {index}
                                                    id= {id}
                                                    innerRef = {provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps = {provided.dragHandleProps}
                                                />


                                            }}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                    <div className='flex items-end justify-end p-2'>
                                        <button className='text-green-500 hover:text-green-600'>
                                            <PlusCircleIcon className='w-6 h-6'/>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            }}

                        </Droppable>
            </div>
        }}
    </Draggable>
  )
}

export default Column;