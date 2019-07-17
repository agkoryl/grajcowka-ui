import { SET_FILTERS, CLEAR_FILTERS } from '../constants';

export const setFilters = (filters) => ({
    type: SET_FILTERS, filters
});

export const clearFilters = () => ({
    type: CLEAR_FILTERS
})