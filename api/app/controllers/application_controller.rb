class ApplicationController < ActionController::API
  def after_sign_in_path_for(after_sign_in_path_for)
    current_user.user_profile.present? ? "#{domain}/profile" : "#{domain}/registars"
  end

  def domain
    'http://localhost:3001' if Rails.env.development?
  end

  def login?
    redirect_to '/login'  unless current_user.present?
  end
end
