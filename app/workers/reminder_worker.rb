class ReminderWorker
    include Sidekiq::Worker
  
    def perform(time, id)
        reminder = ConfiguredReminder.find id
        now_time = Time.parse time

        month_diff = (now_time.year * 12 + now_time.month) - (reminder.time.year * 12 + reminder.time.month) + 1
        next_reminder_time = reminder.time.next_month( month_diff )

        ReminderMailer.with(reminder: reminder).scheduled_reminder_email.deliver_later

        ReminderWorker.perform_at(next_reminder_time, next_reminder_time, id)
    end
end