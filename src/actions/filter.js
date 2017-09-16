import * as types from '../constants/types';

export const clearFilter = () => { return { type: types.CLEAR_FILTER }};
export const updateFilter = filter => { return { type: types.UPDATE_FILTER, payload: filter }};
