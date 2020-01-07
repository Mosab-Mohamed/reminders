class CreateConfiguredReminders < ActiveRecord::Migration[5.2]
  def change
    create_table :configured_reminders do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.text :text
      t.datetime :scheduled_time

      t.timestamps
    end
  end
end
