const initState = {
    posts: [
        {id: '1', title: 'Title One', body: 'Body One'},
        {id: '2', title: 'Title Two', body: 'Body Two'},
        {id: '3', title: 'Title Three', body: 'Body Three'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;