//import { CLICKED_LOGIN } from './constants';

export function userLoginHandler(responseData){
    return {
        type : "CLICKED_LOGIN",
        payload: responseData
    }
}