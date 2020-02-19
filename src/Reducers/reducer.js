import  {ADD_LIST,DELETE_LIST,EDIT_LIST} from '../actions/ActionType';

const todoList=[]

export const reducerList=(state=todoList,action)=>{
    switch(action.type){
        case ADD_LIST:
            return (state.concat(action.payload));
        case DELETE_LIST:
            return state.filter(el=>el.id !==(action.payload));
        case EDIT_LIST:
            return state.map(el=> el.id===action.payload.id ? {...el, newtask: action.payload.newValue} : el);
        default:
            return state
    }
}