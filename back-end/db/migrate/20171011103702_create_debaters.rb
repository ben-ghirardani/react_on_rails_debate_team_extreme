class CreateDebaters < ActiveRecord::Migration
  def change
    create_table :debaters do |t|
      t.text :name
      t.integer :debate
      t.text :team

      t.timestamps null: false
    end
  end
end
