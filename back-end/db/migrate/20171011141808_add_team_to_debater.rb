class AddTeamToDebater < ActiveRecord::Migration
  def change
    add_reference :debaters, :team, index: true, foreign_key: true
  end
end
