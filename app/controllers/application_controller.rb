class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

  private
  
  def render_record_not_found (error)
    # error.model => user/expense/category not found
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
  
  def render_invalid(invalid)
    render json: {errors: ErrorMessageSerializer.error_message(invalid.record.errors)}, status: :unprocessable_entity
  end

end
