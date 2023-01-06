class Category < ApplicationRecord

    has_many :expenses, dependent: :destroy
    has_many :users, through: :expenses 

    validates :category_name, presence: true
    validates :cat_type, presence: true
    validates :category_name, uniqueness: true
    # validates :id, uniqueness: true


    def self.category_names
        self.distinct.pluck(:category_name)
    end

    def self.category_count
        types = self.category_types
        types.map do |t|
            count = self.all.where(cat_type: t).count 
            "#{t}: #{count}"
        end
    end

    


end
