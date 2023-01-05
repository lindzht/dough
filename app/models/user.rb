class User < ApplicationRecord

    has_many :expenses
    has_many :categories, through: :expenses

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true

    def self.find_categorynames
        self.categories.where(category_name: params[:category_name])
    end


end
