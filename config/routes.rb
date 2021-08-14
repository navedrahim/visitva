Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
    resources :posts do
      resources :comments
  end
  resources :users

  post "/users/login", to: "users#login"
  get "/users/verify", to: "users#verify"
end
