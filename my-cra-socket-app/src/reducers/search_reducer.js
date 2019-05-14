export default function(state = "", action){
    switch(action.type){
        case "NEWS_SEARCH":
        return action.payload;
    }
    return state;
}