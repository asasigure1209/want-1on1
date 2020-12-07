class CreateProfessions < ActiveRecord::Migration[6.0]
  def change
    create_table :professions do |t|
      t.string "name", null: false
      t.string "channel_id", null: false

      t.timestamps
    end
  end
end
