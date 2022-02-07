Rails.application.routes.draw do

  scope :api do
    resources :authors do
      resources :posts
    end
    
    # namespace :v1 do 
    #   resources :posts
    # end

    # namespace :v2 do 
    #   resources :posts
    # end
  end

    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
