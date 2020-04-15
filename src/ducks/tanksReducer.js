const initialState = {
    myTanks: []
}

const SAVE_TANK = 'SAVE_TANK'

export function saveTank(savedTank){
    console.log('hit saveTank')
    return {
        type: SAVE_TANK,
        payload: savedTank
    }
}

export default function tanksReducer(state = initialState, action){
    switch(action.type){
        case SAVE_TANK:
            return {
                myTanks: [...state.myTanks, action.payload]
            }
        default:
            return state
    }
}