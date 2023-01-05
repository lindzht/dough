class CategoriesController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:index]

    def index
        user = find_user
        render json: user.categories, status: :ok
    end

    def create 
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        user = find_user
        subcategory = user.categories.find_by(category_name: params[:id])
        subcategory.update(category_name: params[:category_name])
        render json: subcategory, status: :ok
    end

    def show
        user = find_user
        categories = user.find_categorynames
        render json: categories, status: :ok
    end

    def category_summary
        summary = Category.category_types
        render json: summary, status: :ok
    end

    def destroy
        category = Category.find(params[:id])
        category.destroy
        head :no_content
    end

    private

    def find_user
        User.find(session[:user_id])
    end

    def category_params
        params.permit(:category_name, :cat_type)
    end

end
