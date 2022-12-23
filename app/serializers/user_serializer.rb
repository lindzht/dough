class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest, :income
end
