import React from 'react'
import BlogPost from './BlogPost'

const BlogPostList = props => {
	
	const filtered = () => {
		switch (props.filter) {
			case 'odd':
				return props.showingPosts.filter((post, i) => i % 2 === 0)
			case 'even':
				return props.showingPosts.filter((post, i) => i % 2 !== 0)
			default:
				return props.showingPosts
		}

	}

	return(
		<div>
			<ul>
				{filtered().map(post => <li><BlogPost getPicturesforPost={props.getPicturesforPost} post={post}/></li>)}
			</ul>
		</div>	
	)
}

export default BlogPostList
