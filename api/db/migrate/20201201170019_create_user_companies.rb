class CreateUserCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :user_companies do |t|
      t.integer "user_id", null: false  
      t.integer "company_id", null: false

      t.timestamps
    end
  end
end
