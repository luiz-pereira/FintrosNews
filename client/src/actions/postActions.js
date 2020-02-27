
export const fetchAllPosts = () => {
	return dispatch => {
		
    fetch("https://fintros-news.herokuapp.com/api/posts/all")
    .then(resp => resp.json())
    .then(data => {
			dispatch ({ type: "GET_ALL_POSTS", payload: data})
		})
	}
}

export const showNextPage = () => ({
	type: 'SHOW_NEXT_PAGE'
})