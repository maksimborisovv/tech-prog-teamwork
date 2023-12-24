import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: null,
    isLoading: false,
    error: '',
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;

