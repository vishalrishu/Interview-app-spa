class ReminderJob < ApplicationJob
  queue_as :default

  def perform(interview_id, updated_at)
    @interview = Interview.find(interview_id)
    if @interview.id?
      if @interview.updated_at.to_i == updated_at.to_i  
        ReminderMailer.set_reminder(interview_id).deliver_now
      else
        puts "Updated, older mail, We don't need to send this mail now."
      end
    else  
      puts "Interview deleted or doesn't exist"
    end
  end
  
end
