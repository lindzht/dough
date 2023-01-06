class ExpensesController < ApplicationController
    
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index, :destroy]



    def index
        user = find_user
        expenses = user.filter_expenses
        render json: expenses, status: :ok
    end

    def create
        # byebug
        params[:user_id] = session[:user_id]
        cat_id = Category.all.find_by(id: params[:category_id])
        expense = Expense.find_or_create_by(item: params[:item], cost: params[:cost], date_of_expense: params[:date_of_expense], user_id: params[:user_id], category_id: cat_id)
        # expense.update(category_id: params[:category_id])
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

    # def expense_params
    #     # need to add id bc it belongs to user and category
    #     params.permit(:item, :cost, :date_of_expense, :category_id, :user_id)
    # end

    def find_user
        User.find(session[:user_id])
    end
end

# def create
#     byebug
#     params[:user_id] = session[:user_id]
#     expense = Expense.create!(expense_params)
#     expense.update(category_id: params[:category_id])
#     render json: expense, status: :created
# end