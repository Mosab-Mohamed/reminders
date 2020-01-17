Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      scope :reminders do
        get '/', to: 'configured_reminders#index'
        post '/', to: 'configured_reminders#create'
        patch '/:reminder_id', to: 'configured_reminders#update'
        delete '/:reminder_id', to: 'configured_reminders#destroy'
      end
    end
  end
  
  root 'homepage#index'
  get '/*path', to: 'homepage#index'
end
