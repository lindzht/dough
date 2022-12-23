class ErrorMessageSerializer < ActiveModel::Serializer
  
    def self.error_message(errors)
      errors.map do |error|
          "#{error.attribute} #{error.message}"
      end
    end

end
