require 'sidekiq/api'

class ConfiguredReminder < ApplicationRecord
  after_create :schedule_reminder
  after_update :reschedule_reminder
  after_destroy :clear_scheduled_reminders

  belongs_to :user

  validates :title, :text, :scheduled_time, presence: true
  validate :scheduled_time_is_after_now

  def scheduled_time_is_after_now
    return if scheduled_time.blank?

    if scheduled_time <= Time.now
      errors.add(:scheduled_time, "must be in the future")
    end
  end

  def schedule_reminder
    ReminderWorker.perform_at(scheduled_time, scheduled_time, id)
  end

  def clear_scheduled_reminders
    queue = Sidekiq::ScheduledSet.new
    jobs = queue.select { |job| job.args[1] == id }
    jobs.each(&:delete) if !jobs.empty?
  end

  def reschedule_reminder
    clear_scheduled_reminders

    schedule_reminder
  end
end
