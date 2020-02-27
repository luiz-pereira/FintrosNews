class PostsController < ApplicationController

	def update_post_list
		# check if i have the most up-to-date 1000 stories
		newstories = []
		newstories = HTTParty.get('https://hacker-news.firebaseio.com/v0/newstories.json').parsed_response
		post_ids = Post.order(original_post_id: :desc).map(&:original_post_id)
		(newstories - post_ids).each do |i|
			Post.create(original_post_id: i)
			Post.order(:original_post_id).first.destroy
		end
		get_contents
	end

	def all_posts
		@posts = Post.order(original_post_id: :desc)
		render json: @posts
	end

	OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE # remove for production

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
			post.image_link = img_from_url(post.url)
			post.updated = true
			post.save
		else
			post.destroy
		end
	end

	def img_from_url(url)
		if url
			begin
				doc = Nokogiri::HTML(URI.open(url))
			if doc
				attrib = doc.css("meta[property='og:image']")
				if attrib && !attrib.empty?
					return img_url = attrib.first.attributes["content"].value
				end
			end
			rescue => exception
			end		
		end
	end




end
