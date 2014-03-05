class FeedbackController < ApplicationController
  @generate_url_with_host = false

  # To change this template use File | Settings | File Templates.
  def show

  end


  # We check to see if checkbox has been activated to ensure that this isn't a spam script
  def send_message
    if params[:not_a_bot]
      email_with_name = "#{params[:name]} <#{params[:email]}>"
      FeedbackMailer.send_feedback(email_with_name, params[:system], params[:id], params[:comments]).deliver
    end
  end

end