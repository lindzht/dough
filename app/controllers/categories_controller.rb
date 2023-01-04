class CategoriesController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:index]

    def index
        render json: Category.all, status: :ok
    end

    def create 
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def category_summary
        summary = Category.category_count
        render json: summary, status: :ok
    end


    private

    def category_params
        params.permit(:category_name, :cat_type)
    end

end
