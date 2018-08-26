Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "welcome#index"
  get '/add_to_starred', to: 'influencer#add_to_starred_influencers', as: 'add_to_starred'
  get '/delete_user', to: 'influencer#remove_from_starred_influencers', as: 'delete_user'
end
