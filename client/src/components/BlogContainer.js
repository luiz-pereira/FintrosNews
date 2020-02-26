import React, { Component } from 'react'
import BlogPostList from './BlogPostList'
import { connect } from 'react-redux'
import { fetchAllPosts, getPicturesforPost, showNextPage } from '../actions/postActions'
import $ from 'jquery'

class BlogContainer extends Component {

	state = {
		filter: "all"
	}

	componentDidMount = () => {
		this.props.fetchAllPosts()
		window.addEventListener('scroll', this.onScroll);
	}

	onScroll = event => {
		$(window).scroll(() => {
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				this.props.showNextPage()
			}
	});
	}

	handleSelect = event => {
		event.preventDefault()
		this.setState({filter: event.target.value})
	}
	
	

	render(){
		return (
			<div>
				<label for="filter">Filter results:</label>
				<select id='filter' onChange={this.handleSelect}>
					<option value='all'>All</option>
					<option value='even'>Only Even</option>
					<option value='odd'>Only Odd</option>
				</select>
				<BlogPostList getPicturesforPost={this.props.getPicturesforPost} filter={this.state.filter} showingPosts={this.props.showingPosts}/>
				<h4>More Posts...</h4>
			</div>
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
		showNextPage: () => dispatch(showNextPage()),
		getPicturesforPost: posts => dispatch(getPicturesforPost(posts))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)