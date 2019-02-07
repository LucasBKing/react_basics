const initState = {
    posts: [
        {id: '1', title: 'Title One', body: 'Body One'},
        {id: '2', title: 'Title Two', body: 'Body Two'},
        {id: '3', title: 'Title Three', body: 'Body Three'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;