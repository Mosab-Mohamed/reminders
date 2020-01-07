Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      scope :reminders do
        get '/', to: 'configured_reminders#index'
      end
    end
  end
  
  root 'homepage#index'
  get '/*path', to: 'homepage#index'
end
