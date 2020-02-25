export const fetchAllPosts = () => {
	return dispatch => {
		dispatch ({type: 'LOADING_ALL_POSTS'})
    fetch("/api/posts/all")
    .then(resp => resp.json())
    .then(data => {
			dispatch ({ type: "GET_ALL_POSTS", payload: data})
		})
	}
}

// export const fetchAllPosts = () =>{

// }