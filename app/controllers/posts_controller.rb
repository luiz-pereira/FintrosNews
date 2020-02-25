class PostsController < ApplicationController

	def update_post_list
		# check if i have all the 1000 stories
		newstories = []
		newstories = HTTParty.get('https://hacker-news.firebaseio.com/v0/newstories.json').parsed_response
		post_ids = Post.order(original_post_id: :desc).map(&:original_post_id)
		
		(newstories - post_ids).each do |i|
			Post.create(original_post_id: i)
			Post.order(:original_post_id).first.destroy
		end
		get_contents
	end

	def get_contents
		Post.where(updated: false).each{|post| get_content(post)}
	end

	def get_content (post)
		post_content = HTTParty.get("https://hacker-news.firebaseio.com/v0/item/#{post.original_post_id}.json").parsed_response
		if post_content
			post.author = post_content['by']
			post.title = post_content['title']
			post.score = post_content['score']
			post.creation_date = post_content['date']
			post.url = post_content['url']
			post.content = post_content['text']
			post.post_type = post_content['type']
			post.updated = true
			post.save
		end
	end

	def all_posts
		@posts = Post.order(original_post_id: :desc)
		render json: @posts
	end

end
