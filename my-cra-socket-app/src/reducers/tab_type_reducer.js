export default function(state = "entertainment", action){
    switch(action.type){
        case "TAB_TYPE": 
            return action.payload;
    }
    return state;
}