class CreateUserProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :user_profiles do |t|
      t.integer "user_id", null: false
      t.text "description"

      t.timestamps
    end
  end
end
