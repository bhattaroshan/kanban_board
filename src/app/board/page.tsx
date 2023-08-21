'use client'
import React,{useState} from 'react'
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function page() {

    const [showKanban,setShowKanban] = useState(false);

    const [board,setBoard] = useState([
        {
            name: 'ToDo',
            items: [
                {task: 'Bring the dog for walk',id:'101',name:'Roshan Bhatta'},
                {task: 'Take everyone for dinner',id:'102',name:'Regan Bhatta'},
                {task: 'Take a shower in the evening',id:'103',name:'Shiv Raj Chimouriya'}
            ]
        },
        {
            name: 'In Progress',
            items:[
                {task:'What is up?',id:'104',name:'Ajaya Maharjan'}
            ]
        },
        {
            name: 'Done',
            items: [
                {task: 'Take people to retreat', id:'105',name:'Rahul Raj Shah'}
            ]
        },
    ]);

    const handleDragEnd = (result:DropResult) =>{
        const {destination,source,type} = result;

        if(!destination) return;

        if(type==='column'){

            if(destination.index === source.index) return;

            const temp = [...board];
            const removed = [...board][source.index];
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

    const handleTaskClick = () =>{
        setShowKanban(prev=>!prev);
    }

    return (
        <div className='bg-red-100 w-full h-screen absolute bg-gradient-to-br from-purple-300 to-blue-200'>
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
                                                       <div className={`p-2 bg-blue-400 border font-bold rounded-xl 
                                                                    `}
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
                                                                        className='p-4 bg-white my-2 rounded-xl hover:bg-gray-200 flex flex-col space-y-4'
                                                                        onClick={handleTaskClick}
                                                                        >
                                                                            <div className='flex items-center space-x-2'>
                                                                                <Avatar>
                                                                                    <AvatarImage src=""/>
                                                                                    <AvatarFallback className='bg-red-300'>AB</AvatarFallback>
                                                                                </Avatar>
                                                                                <p className='font-semibold'>{item.name}</p>
                                                                            </div>
                                                                            <p className='text-sm font-light cursor-pointer pl-4'>{item.task}</p>
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
        
        <Dialog open={showKanban} onOpenChange={setShowKanban}>
  {/* <DialogTrigger >Open</DialogTrigger> */}
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    
        </div>
    )
}

export default page