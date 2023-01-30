const initState = {};

const tokenReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_LOGINSTATE':
            return {
                ...state,
                skb: action.payload
            }
        default:
            return state
    }
}

export default tokenReducer;