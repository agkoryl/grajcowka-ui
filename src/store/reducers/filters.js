import { SET_FILTERS, CLEAR_FILTERS } from '../constants';

const INITIAL_STATE = {
    filterValue: "",
    selected: "meetingGame",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return {
                ...state,
                filterValue: action.filters.filterValue,
                selected: action.filters.selected,
            }
        case CLEAR_FILTERS:
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}