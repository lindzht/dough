class Category < ApplicationRecord

    has_many :expenses 
    has_many :users, through: :expenses 

    validates :category_name, presence: true
    validates :cat_type, presence: true


    def self.category_types
        self.distinct.pluck(:cat_type)
    end

    def self.category_count
        types = self.category_types
        types.map do |t|
            count = self.all.where(cat_type: t).count 
            "#{t}: #{count}"
        end
    end


end
