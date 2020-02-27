
export const fetchAllPosts = () => {
	return dispatch => {
		
    fetch("/api/posts/all")
    .then(resp => resp.json())
    .then(data => {
			dispatch ({ type: "GET_ALL_POSTS", payload: data})
		})
	}
}

export const showNextPage = () => ({
	type: 'SHOW_NEXT_PAGE'
})