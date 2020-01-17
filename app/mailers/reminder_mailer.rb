class ReminderMailer < ApplicationMailer
    def scheduled_reminder_email
        @reminder = params[:reminder]
        mail(to: @reminder.user.email, subject: "Scheduled Reminder!")
    end
end
