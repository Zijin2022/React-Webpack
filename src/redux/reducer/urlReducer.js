const initState = '';

const urlReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_URL':
            return {
                url: action.payload
            }
        default:
            return state
    }
}

export default urlReducer