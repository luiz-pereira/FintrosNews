import React from 'react'
import grabity from 'grabity'



const BlogPost = props => {
	let grabity = require("grabity");
	(async () => {
		if (props.post.url){
			let postImg = await grabity.grabIt(props.post.url);
				debugger
				 console.log(postImg.image);
		}
	}
	return(
		<div>
			<h3>{props.post.title}</h3>
			<p>{props.post.author}</p>
			<img src={postImage()}/>
		</div>
	)
}


 			

export default BlogPost