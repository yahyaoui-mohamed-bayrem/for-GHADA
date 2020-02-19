import {ADD_LIST,DELETE_LIST,EDIT_LIST} from './ActionType'
export const addNewTask=(newtask)=>(// newtask contains an object as you can see in Add component
    {type:ADD_LIST,
     payload:{...newtask}} // added spread operator "..." : 
)
export const deleteTask=(id)=>(
    {type:DELETE_LIST,
     payload:id}
)

export const editTask=(id,newValue)=>(
    {
        type:EDIT_LIST,
        payload:{id,newValue}
    }
)