const INITIAL_STATE = { selected: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAV_SELECTED':
            return { ...state, selected: action.payload }
        default:
            return state
    }
}