class ExpensesController < ApplicationController
    
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index, :destroy]



    def index
        user = find_user
        # Using active record associations
        render json: user.expenses.order("created_at DESC"), status: :ok
    end

    def create
        # byebug
        params[:user_id] = session[:user_id]
        expense = Expense.create!(expense_params)
        render json: expense, status: :created
    end

    def destroy
        # byebug
        expense = Expense.find(params[:id])
        expense.destroy
        head :no_content
    end

    def update
        expense = Expense.find(params[:id])
        expense.update(expense_params)
        render json: expense, status: :accepted
    end

    private

    def expense_params
        # need to add id bc it belongs to user and category
        params.permit(:item, :cost, :date_of_expense, :category_id, :user_id)
    end

    def find_user
        User.find(session[:user_id])
    end
end
