# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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

		
