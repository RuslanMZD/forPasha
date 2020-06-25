import {API} from "../../api/api";

const GET_USERS ="/viewReducer/getUsers";
const SET_PROCENT_IN_DAY="/viewReducer/setProcent_IN_DAY";
const SET_PROCENT="/viewReducer/setProcent";

let initialState={

        users: [],

        procent:Number

        

    
    
}




const viewReducer =(state= initialState ,action)=>{

        if(action.type===GET_USERS){

            let stateCopy={...state};
            stateCopy.users=[...action.users]

            return stateCopy;
        
         }
        else if(action.type===SET_PROCENT){
            let stateCopy={...state};
         
            stateCopy.procent=action.procent;

            return stateCopy;
    }









        return state;

}



export const setProcentsInDayActionCreator=(procentDepozit)=>{
    return({type:SET_PROCENT_IN_DAY,procentDepozit})
}

export const setProcentsActionCreator=(procent)=>{
    return({type:SET_PROCENT,procent})
}







export const setUsersActionCreator=(users)=>{
    return({type:GET_USERS,users})
}



export const getUsersThunkCreator=()=>{
    return async (dispatch)=>{
        let response = await API.getClient();
        dispatch(setUsersActionCreator(response))
    }
}





export default viewReducer;