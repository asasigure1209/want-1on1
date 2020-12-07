class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show]

  def show
    render json: profile_json
  end

  private

  def set_profile
    @profile = UserProfile.joins(user: [:companies, :professions]).find(params[:id])
  end

  def profile_json
      { 
        id: @profile.id,
        status: 200,
        errors: nil,
        result: {
          user: {
            id: @profile.user.id,
            name: "#{@profile.user.first_name} #{@profile.user.last_name}",
            company: @profile.user.companies.first.name,
            profession: @profile.user.professions.first.name,
            image_url: @profile.user.image_url,
          },
          id: @profile.id,
          description: @profile.description,
          created_at: @profile.created_at.to_i,
        },
      }
  end
end
