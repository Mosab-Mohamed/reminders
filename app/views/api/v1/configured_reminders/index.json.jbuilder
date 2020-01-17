json.reminders @reminders do |reminder|
    json.id reminder.id
    json.title reminder.title
    json.text reminder.text
    json.scheduled_time reminder.scheduled_time
end
