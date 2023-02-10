

const reducer = (state, action) => {


    if(state === undefined){
        state = {
            score: 0
        }
    }


    switch(action.type){

        case "INCREMENT": 
            return {
                ...state, 
                score: state.score + action.data
            }

        case "DECREMENT": 
            return {
                ...state, 
                score: state.score - action.data
            }

        default: 
            return state;
    }
}

export default reducer;