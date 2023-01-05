class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :item, :cost, :date_of_expense

  has_one :user
  has_one :category
end
