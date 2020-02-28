Rails.application.routes.draw do
	
  resources :posts

		get 'api/posts/refresh' => 'posts#update_post_list'
		post 'api/posts/test' => 'posts#test'

		get 'api/posts/all' => 'posts#all_post	s'

		post 'api/posts/keep_awake' => 'posts#update_post_list'

end
# JSON.parse('https://hacker-news.firebaseio.com/v0/newstories.json')
# request = HTTParty.get('https://hacker-news.firebaseio.com/v0/newstories.json')