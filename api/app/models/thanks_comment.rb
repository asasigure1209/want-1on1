class ThanksComment < ApplicationRecord
  belongs_to :want_talk
  belongs_to :user, foreign_key: 'owner_id'
  belongs_to :user, foreign_key: 'target_user_id'
end
