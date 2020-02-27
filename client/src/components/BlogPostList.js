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

	document.body.id = `body-${props.mode}`

	return(
		<div className='posts'>
			<ul className='posts'>
				{filtered().map(post => <li className={`posts ${props.mode}`}><BlogPost post={post}/></li>)}
			</ul>
		</div>	
	)
}

export default BlogPostList
