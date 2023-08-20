'use client'
import React,{useState} from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'

interface TodoProps{
    id: string;
    task: string;
}

interface BoardProps{
    name: string;
    items: TodoProps[];
}

const reorder = (arr:BoardProps[], source:number, destination:number) =>{

    const temp = [...arr];
    const erased = arr[source];
    temp.splice(source,1);
    temp.splice(destination,0,erased);
    return temp;
}

function page() {

    const [board,setBoard] = useState<BoardProps[]>([
        {
            name: 'ToDo',
            items: [
                {task: 'Bring the dog for walk',id:'101'},
                {task: 'Take everyone for dinner',id:'102'},
                {task: 'Take a shower in the evening',id:'103'}
            ]
        },
        {
            name: 'In Progress',
            items:[
                {task:'What is up?',id:'104'}
            ]
        },
        {
            name: 'Done',
            items: [
                {task: 'Take people to retreat', id:'105'}
            ]
        },
    ]);

    const handleDragEnd = (result:DropResult) =>{
        const {destination,source,type} = result;

        if(!destination) return;

        if(type==='column'){

            if(destination.index === source.index) return;

            const temp = [...board];
            const removed = temp[source.index];
            temp.splice(source.index,1);
            temp.splice(destination.index,0,removed);
            setBoard(temp);
        }else if(type==='card'){
            if(destination.droppableId=== source.droppableId &&
                source.index === destination.index) return;

            //same column, handle only shuffles
            if(destination.droppableId===source.droppableId){
                let temp = [...board][parseInt(destination.droppableId)].items;
                const removed = temp[source.index];
                temp.splice(source.index,1);
                temp.splice(destination.index,0,removed);
                let temp3 = [...board];
                temp3[parseInt(destination.droppableId)].items=temp;
                setBoard(temp3);
            }else{ //different column
                let tempBoard = Array.from(board);
                let sourceColumn = tempBoard[parseInt(source.droppableId)];
                let destinationColumn = tempBoard[parseInt(destination.droppableId)];
                const [removedSource] = sourceColumn.items.splice(source.index,1);
                destinationColumn.items.splice(
                     destination.index,0,removedSource);
                
                setBoard(tempBoard);
                
            }

        }
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div>

            <Droppable droppableId='board' direction='horizontal' type='column'>
                {(provided)=>(
                    <div {...provided.droppableProps} ref={provided.innerRef}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-5 m-4 max-w-4xl mx-auto'
                    >
                        {
                            board.map((column,index)=>(
                                <Draggable key={index} draggableId={index.toString()} index={index}>
                                    {(provided)=>(
                                        <div {...provided.dragHandleProps} 
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}>
                                            <Droppable droppableId={index.toString()}
                                                type='card'>
                                                    {(provided,snapshot)=>(
                                                       <div className={`p-2 bg-red-400 rounded-md font-bold ${snapshot.isDraggingOver&&'bg-blue-300'}`}
                                                       {...provided.droppableProps} ref={provided.innerRef}>
                                                        <h1 className='text-white'>{column.name}</h1>

                                                        {
                                                            column.items.map((item,idx)=>(
                                                                <Draggable key={item.id} draggableId={item.id} index={idx}>
                                                                    {(provided)=>(
                                                                        <div 
                                                                        {...provided.dragHandleProps}
                                                                        {...provided.draggableProps} 
                                                                        ref={provided.innerRef}
                                                                        className='p-4 bg-yellow-200 my-2 rounded-md'
                                                                        >
                                                                            <p className='text-sm font-light'>{item.task}</p>
                                                                        </div>
                                                                    )} 
                                                                </Draggable>
                                                            ))
                                                        }
                                                        {provided.placeholder}
                                                    </div>
                                                    )}

                                            </Droppable>
                                            </div>
                                    )}
                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </div>
        </DragDropContext>
    )
}

export default page