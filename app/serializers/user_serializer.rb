class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest, :income, :sum_of_expenses

  def sum_of_expenses
    self.object.expenses.sum("cost")
  end
end
