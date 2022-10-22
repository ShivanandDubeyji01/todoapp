import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "./action"

const initialdata ={
    taskItems:[]
}

const taskReducer =(state = initialdata,action)=>{
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                taskItems: [...state.taskItems, { text: action.payload, completed: false }]
        
            }
        case DELETE_TASK:
            return{
                ...state,
                taskItems:[...state.taskItems.filter((task)=> task.text !== action.payload)]
            }
        case COMPLETE_TASK:
            let updatedTaskItems =[]
            state.taskItems.map((task)=>{
                if(task.text === action.payload){
                    if(task.completed === true){
                        task.completed = false
                    } else{
                        task.completed = true
                    }
                }
                updatedTaskItems.push(task)
            })
            return{
                ...state,
                taskItems:updatedTaskItems
            }
        default:
            return state;
    }

}

export default taskReducer