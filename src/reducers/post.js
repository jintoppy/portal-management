const initialState = {
    posts: [],
    selectedPost: null
};
const postReducer = (state = initialState, action) => {
    if(action.type === 'add_post'){
        return {
            ...state,
            posts: [...state.posts, action.payload]
        };
    }
    return state;
}

export default postReducer;