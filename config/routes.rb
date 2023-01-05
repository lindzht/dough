Rails.application.routes.draw do

  resources :expenses, only: [:create, :index, :update, :destroy]
  resources :categories, only: [:create, :index, :update, :show, :destroy]

  resources :users

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to:"sessions#destroy"

  # keeps user logged in
  get "/me", to: "users#show"

  get "/categories-summary", to: "categories#category_summary"
  
  # delete "expensebye", to: "expenses#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
