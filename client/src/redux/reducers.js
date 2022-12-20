const initialState = {
    videogames: [],
    videogamesFilter: [],
    genre: [],
    detail: [],
    status: [],
    pages: 1

}


function rootReducer (state = initialState, action){
switch(action.type){

    case "GET_VIDEOGAMES":  
    return  {
        ...state,
        videogames: action.payload,
        videogamesFilter: action.payload //cuando trae los v, hace dos copias
    }

default: return state;
}
}


export default rootReducer
