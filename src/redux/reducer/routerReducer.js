const initState = [];

const routerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_MENUTREE':
            console.log('list', action.payload);
            return {
                ...state,
                menuTree: action.payload
            }
        default:
            return state
    }
}

export default routerReducer