function postReducer (state = {posts: [], showingPosts: [], page: 1}, action){
	switch (action.type) {
		case 'GET_ALL_POSTS':
			return {...state, posts: action.payload, showingPosts: action.payload.slice(0,30), loading:false}			
		case 'SHOW_NEXT_PAGE':
			return {...state, page: state.page+=1, showingPosts: state.posts.slice(0,30 * state.page+1), loading: false}
		default:
			return state
	}
}

export default postReducer