class ConfiguredReminder < ApplicationRecord
  belongs_to :user

  validates :title, :text, :scheduled_time, presence: true
end
