import React, { Component } from 'react'
import BlogPostList from './BlogPostList'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../actions/postActions'

class BlogContainer extends Component {

componentDidMount = () => {
	this.props.fetchAllPosts()
}
	
	render(){
		return (
				<BlogPostList showingPosts={this.props.showingPosts}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
		showingPosts: state.showingPosts,
		loading: state.loading,
		page: state.page
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchAllPosts: () => dispatch(fetchAllPosts()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)