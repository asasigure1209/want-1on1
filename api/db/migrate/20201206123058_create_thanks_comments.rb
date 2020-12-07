class CreateThanksComments < ActiveRecord::Migration[6.0]
  def change
    create_table :thanks_comments do |t|
      t.integer "want_talk_id", null: false
      t.integer "owner_id", null: false
      t.integer "target_user_id", null: false
      t.text "body"

      t.timestamps
    end
  end
end
