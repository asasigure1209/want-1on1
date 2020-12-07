class CreateWantTalks < ActiveRecord::Migration[6.0]
  def change
    create_table :want_talks do |t|
      t.integer "user_id", null: false
      t.integer "company_id"
      t.integer "profession_id"
      t.string "title", null: false
      t.text "description"
      t.integer "status", default: 0, null: false

      t.timestamps
    end
  end
end
