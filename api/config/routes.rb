Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions',
    omniauth_callbacks: "users/omniauth_callbacks"
  }

  devise_scope :user do
    get "signup", :to => "users/registrations#new"
    get "login", :to => "users/sessions#new"
    get "logout", :to => "users/sessions#destroy"
  end
  resources :profiles, only: [:show]
  resources :want_talks, only: [:index, :create]
  resources :search, only: [:index]
end
