import { createStore } from "redux";

const initialState = {
        users:[],
        loggedInUser: null,
        employees:[],
        lockPassword: '',
        unLockedUser:null
}
const reducer = (state = initialState, action) => {
        switch(action.type){
                case "REGISTRATION":
                    return{
                        ...state,
                        users:[...state.users, action.payload]
                    }
                case "LOGIN_USER":
                    return{
                        ...state,
                        loggedInUser: action.payload
                    }
                case "LOGOUT_USER":
                    return{
                        ...state,
                        loggedInUser: null
                    }
                case "ADD_EMPLOYEES":
                    return{
                        ...state,
                        employees:[...state.employees, action.payload]
                    }
                case "DELETE_EMPLOYEE":
                    return{
                        ...state,
                        employees:state.employees.filter(emp => emp.id !== action.payload)
                    }
                case "SET_LOCK_PASSWORD":
                return{
                    ...state,
                    lockPassword: action.payload
                }
                case "LOGIN_LOCK_PROFILE":
                    return{
                        unLockedUser:action.payload
                    }
                    default:
                        return state;
        }
}
export default createStore(reducer)
