class Users::RegistarsController < ApplicationController
  def create
    ActiveRecord::Base.transaction do
      current_user.update(url_name: params[:url_name], chat_work_user_id: params[:chat_work_user_id])
      current_user.create_user_profile(description: params[:description])
      current_user.user_companies.create(company: params[:company_id])
      current_user.user_professions.create(user_profession: params[:user_profession_id])
    end
  end
end
