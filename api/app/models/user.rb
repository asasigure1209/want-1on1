class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_one :user_profile
  has_many :want_talks
  has_many :user_companies
  has_many :companies, through: :user_companies
  accepts_nested_attributes_for :user_companies

  has_many :user_professions
  has_many :professions, through: :user_professions
  accepts_nested_attributes_for :user_professions

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: %i(google)       

  protected
  class << self
    def find_for_google(auth)
      user = User.find_by(email: auth.info.email)
      unless user
        binding.pry
        user = User.create(
                          first_name: auth.info&.first_name,
                          last_name:  auth.info&.last_name,
                          provider:   auth.provider,
                          uid:        auth.uid,
                          token:      auth.credentials.token,
                          email:      auth.info.email,
                          image_url:  auth.info.image,
                          password:   Devise.friendly_token[0, 20],)
      end
      user
    end
  end
end
