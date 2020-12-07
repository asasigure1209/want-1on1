class ThanksCommentsController < ApplicationController
  before_action :set_want_talk, only: %i[create]

  def index
    thanks_comments_json = ThanksComments.joins(:want_talk).where(owner: target_user).map do | thanks_comment |
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
    render json: { status: 200, errors: nil, result: thanks_comments_json }
  end

  def create
    ActiveRecord::Base.transaction do
      @want_talk.create_thanks_comment(target_user: target_user, body: params[:body], user: @want_talk.user)
      @want_talk.closed!  
    end
    render json: { status: 200, errors: nil, thanks_comments_json }
  end

  private

  def set_want_talk
    @want_talk = wantTalk.find(params[want_talk_id])
  end

  def target_user
    Users.find_by(url_name: params[:url_name])
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
