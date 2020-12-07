class WantTalksController < ApplicationController
  def index
    p params
    want_talks_json = want_talks&.limit(params[:number])&.offset(params[:offset])&.map do |want_talk|
      { 
        user: {
          id: want_talk.user.id,
          name: "#{want_talk.user.first_name} #{want_talk.user.last_name}",
          company: want_talk.user.companies.first.name,
          profession: want_talk.user.professions.first.name,
          image_url: want_talk.user.image_url,
        },
        id: want_talk.id,
        title: want_talk.name,
        description: want_talk.description,
        status: want_talk.status,
        created_at: want_talk.created_at.to_i,
      }
    end
    render json: want_talks_json
  end

  def create
    current_user.create_want_talk(title: params[:title], description: params[:description], company: company, profession: profession)
    Chatwork.post_message(company.channel_id , massage) if company.present?
    Chatwork.post_message(profession.channel_id , massage) if profession.present?
    render json: { status: 200, error: nil, result: true }
  end

  private
  def want_talks
    want_talks = WantTalk.where(user: user) if params[:user_id]
    want_talks.where(profession: profession) if profession
    want_talks.where(company: company) if company
    want_talks.where(status: params[:type]) if params[:type] != 'all'
  end

  def user
    User.find(params[:user_id])
  end

  def company
    Company.find_by(name: params[:company]) if params[:company_id]
  end

  def profession
    Profession.find_by(name: params[:profession]) if params[:profession_id]
  end

  def messages
    "#{current_user.first_name} #{current_user.last_name}さんが新たな面談希望が作成されました\n[info][title]#{want_talk.title}[/title]#{want_talk.description}\n#{domain}/profiles/#{current_user.url_name}[/info]"
  end
end
