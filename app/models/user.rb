class User < ApplicationRecord

    has_many :expenses
    has_many :categories, through: :expenses

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
end
