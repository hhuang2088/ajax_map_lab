Rails.application.routes.draw do
  root 'pins#new'

  resources :pins
end
