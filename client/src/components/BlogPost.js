import React from 'react'
import styled from 'styled-components'
import default_img from '../assets/hackernews.png'


 const BlogPost = props => {
	
	const handleClick = event => {
		window.location.href = props.post.url
	}
	
	const Title = styled.h3`
		font-size: 1.5em;
		font: bold 20px/1.5;
		margin-top: 5%
	`

	const img_style = {
		backgroundImage: `url(${props.post.image_link || default_img})`,
		height: `15.5rem`,
		width: `100%`,
		backgroundSize: 'cover',
		backgroundPosition: 'center 25%',
		backgroundRepeat: 'no-repeat'
	}

		return (
	
			<div className='post-container' onClick={handleClick}>
				<div className='post-image-container'>
					<div style={img_style}/>
				</div>
				<Title>{props.post.title}</Title>
				
				<hr width='40%' align='center'/>
			</div>
	
		)
			
	

}



export default BlogPost