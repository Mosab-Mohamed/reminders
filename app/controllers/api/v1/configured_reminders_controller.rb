class Api::V1::ConfiguredRemindersController < Api::V1::BaseController
    def index
        @reminders = user.configured_reminders
    end
end
  