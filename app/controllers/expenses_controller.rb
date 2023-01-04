class ExpensesController < ApplicationController
    
    skip_before_action :authorized, only: [:create, :index]

    def create
        expense = Expense.create!(expense_params)
        render json: expense, status: :created
    end

    private

    def expense_params
        params.permit(:item, :cost, :date_of_expense, :category)
    end
end
