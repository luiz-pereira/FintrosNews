import React from 'react'
import BlogPost from './BlogPost'

const BlogPostList = props => {
	
	return(
		<div>
			<ul>
				{props.showingPosts.map(post => <li><BlogPost post={post}/></li>)}
			</ul>
		</div>
	)
}

export default BlogPostList
