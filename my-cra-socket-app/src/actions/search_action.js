export function newsSearchHandler(searchedText){
    return{
        type: "NEWS_SEARCH",
        payload: searchedText
    }
}