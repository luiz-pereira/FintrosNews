
export const fetchAllPosts = () => {
	return dispatch => {
		
    fetch("/api/posts/all")
    .then(resp => resp.json())
    .then(data => {
			dispatch ({ type: "GET_ALL_POSTS", payload: data})
		})
	}
}

export const getPicturesforPost = post => {
	return dispatch => {
		
		getPicturePost(post)
		.then(response => {
			if (response) {
				post.image_link = response.image
			}
			dispatch ({ type: "GET_POST_PICTURE", payload: post})
		})
	}
}

const getPicturePost = async post => {
	
	let grabity = require('grabity')
	if (post.url){
		let result = await grabity.grabIt(post.url)
		return result
	}
}

export const showNextPage = () => ({
	type: 'SHOW_NEXT_PAGE'
})