import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySubs = createSelector(
    [selectDirectory],
    directory => directory.subs
)