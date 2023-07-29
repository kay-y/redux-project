import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra'},
    {id: '2', title: 'Slice...', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra'}

]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const  { postAdded } = postSlice.actions
export const selectAllPosts = (state: any) => state.posts;

export default postSlice.reducer