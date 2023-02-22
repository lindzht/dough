class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :category

 validates :item, presence: true
 validates :cost, numericality: {greater_than: 0}
 validates :date_of_expense, presence: true

end
