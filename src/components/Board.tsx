'use client'
import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react'
import {DragDropContext, DropResult, Droppable} from '@hello-pangea/dnd';
import Column from './Column';

function Board() {

    const [board,getBoard] = useBoardStore((state)=>[state.board,state.getBoard]);

    useEffect(()=>{
        getBoard();
    },[getBoard])


    const handleOnDragEnd = (result:DropResult) =>{
        const {destination, source, type} = result; 

        if(!destination) return; 

        if(type==='column'){

        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='board' direction='horizontal' 
                    type='column'>
                {(provided)=>{
                    return <div 
                            className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                            {...provided.droppableProps} ref={provided.innerRef}> 
                        {/* rendering all the columns */}
                        {
                            Array.from(board.columns.entries()).map(([id,column],index) =>{
                                return <Column 
                                            key={id} 
                                            id={id} 
                                            todos={column.todos} 
                                            index={index}
                                />
                            })
                        }

                    </div>
                }
                }

            </Droppable>
        </DragDropContext>
    )
}

export default Board