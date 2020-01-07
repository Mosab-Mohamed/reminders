json.reminders @reminders do |reminder|
    json.id reminder.id
    json.title reminder.title
    json.text reminder.text
    json.scheduledTime reminder.scheduled_time
end
