import React, { Component} from 'react'

import BlogPostList from './BlogPostList'
import NavBar from './NavBar'

import { connect } from 'react-redux'
import { fetchAllPosts, showNextPage } from '../actions/postActions'
import $ from 'jquery'

class BlogContainer extends Component {

	state = {
		filter: "all",
		mode: 'light'
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
	
	handleSelect = filter => {
		this.setState({filter: filter})
	}

	handleMode = dark => {
		dark ? this.setState({mode: 'dark'}) : this.setState({mode: 'light'})
	}

	render(){
		return (
			<div>
				<section className='top-image'/>
				<NavBar modeParent={this.state.mode} handleSelect={this.handleSelect} handleMode={this.handleMode}/>
				<BlogPostList mode={this.state.mode} filter={this.state.filter} showingPosts={this.props.showingPosts}/>
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)