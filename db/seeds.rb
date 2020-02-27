# remove for production
OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE

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
		post.image_link = img_from_url(post.url)
		post.save
	end
end

def img_from_url(url)
	if url
		begin
			binding.pry
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


		# Post.destroy_all
		newstories = []
		newstories = HTTParty.get('https://hacker-news.firebaseio.com/v0/newstories.json').parsed_response
		# get next 500
		next_story = newstories.last
		newstories.each do |post|
			Post.find_or_create_by(original_post_id: post)
		end
		
		until Post.all.length == 1000
			next_story-=1
			item = HTTParty.get("https://hacker-news.firebaseio.com/v0/item/#{next_story}.json").parsed_response
			Post.find_or_create_by(original_post_id: item['id']) if (item && item["type"] && item["type"] == "story")
		end
		
		Post.all.each do |post|
			get_contents
		end
