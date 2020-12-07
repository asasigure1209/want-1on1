class WantTalk < ApplicationRecord
  has_one :thanks_comment
  belongs_to :user
  belongs_to :company
  belongs_to :profession
  enum state: { open: 0, closed: 1 }
end
