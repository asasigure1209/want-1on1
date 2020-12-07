class CreateUserProfessions < ActiveRecord::Migration[6.0]
  def change
    create_table :user_professions do |t|
      t.integer "user_id", null: false  
      t.integer "profession_id", null: false

      t.timestamps
    end
  end
end
