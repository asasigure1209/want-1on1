class SearchController < ApplicationController
  def index
    jsons = case params[:type]
    when 'thanks_comment'
      { status: 200, errors: nil, result: thanks_comments }
    when 'profile'
      { status: 200, errors: nil, result: profiles }
    else
      { status: 400, errors: nil, result: [] }
    end
    render json: jsons
  end

  private

  def thanks_comments
    ThanksComments.joins(:want_talk).where('title like ?',"%#{params[:word]}%").or.where('description like ?',"%#{params[:word]}%").map do | thanks_comment |
      { 
        interviewer: user_to_json(want_talk.owner),
        interviewee: user_to_json(want_talk.target_user),
        want_talk: {
          title: thanks_comment.want_talk.title,
          company: thanks_comment.want_talk.company,
          profession: thanks_comment.want_talk.profession,
          description: thanks_comment.want_talk.description,
        },
        id: thanks_comment.id,
        body: thanks_comment.body,
        created_at: thanks_comment.created_at.to_i,
      }
    end
  end

  def profiles
    UserProfile.joins(user: [:companies, :professions]).where('description like ?',"%#{params[:word]}%").map do |profile|
      { 
        id: profile.id,
        status: 200,
        errors: nil,
        result: {
          user: {
            id: profile.user.id,
            name: "#{profile.user.first_name} #{profile.user.last_name}",
            company: profile.user.companies.first.name,
            profession: profile.user.professions.first.name,
            image_url: profile.user.image_url,
          },
          id: profile.id,
          description: profile.description,
          created_at: profile.created_at.to_i,
        },
      }
    end
  end

  def user_to_json(user)
    { 
      user: {
        id: user.id,
        name: "#{user.first_name} #{user.last_name}",
        company: user.companies.first.name,
        profession: user.professions.first.name,
        image_url: user.image_url,
      }
     }
  end
end
