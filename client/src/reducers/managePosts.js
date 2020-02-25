function postReducer (state = {posts: [], showingPosts: [], page: 1}, action){
	switch (action.type) {
		case 'GET_ALL_POSTS':
			return {...state, posts: action.payload, showingPosts: action.payload.slice(0,30), loading:false}			
		case 'LOADING_ALL_POSTS':
			return {...state, loading: true}
		case 'SHOW_NEXT_PAGE':
			return {...state, showingPosts: action.payload, loading: false}
		default:
			return state
	}
}

export default postReducer