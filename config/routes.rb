Rails.application.routes.draw do
	
  resources :posts

		post 'api/posts/refresh' => 'posts#update_post_list'
		post 'api/posts/test' => 'posts#test'

		get 'api/posts/all' => 'posts#all_posts'

end
# JSON.parse('https://hacker-news.firebaseio.com/v0/newstories.json')
# request = HTTParty.get('https://hacker-news.firebaseio.com/v0/newstories.json')