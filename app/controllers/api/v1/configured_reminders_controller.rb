class Api::V1::ConfiguredRemindersController < Api::V1::BaseController
    def show
        @reminder = user.configured_reminders.find params[:reminder_id]
    end

    def index
        @reminders = user.configured_reminders
    end

    def create
        @reminder = user.configured_reminders.new(reminder_params)
        if !@reminder.save
            @message = @reminder.errors
            render_unprocessable
        end
    end

    def destroy
        reminder = user.configured_reminders.find params[:reminder_id]
        reminder.destroy
        render 'api/v1/shared/empty', status: :ok
    end

    def update
        @reminder = user.configured_reminders.find params[:reminder_id]
        if !@reminder.update(reminder_params)
          @message = @reminder.errors
          render_unprocessable
        end
    end

    private

    def reminder_params
        params.require(:reminder).permit(:title, :text, :scheduled_time)
    end
end
  