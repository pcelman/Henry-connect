const initialState = {
    channels: [],
    channelsFilter: []
}


function rootReducer (state = initialState, action){
switch(action.type){

    case "ADD_CHANNELS":  
    return  {
        ...state,
        channels: action.payload,
        channelsFilter: action.payload
    }

default: return state;
}
}


export default rootReducer
