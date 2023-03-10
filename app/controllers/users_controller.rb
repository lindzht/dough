class UsersController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: [:create, :index]

    #CREATE /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update(income: params[:income])
        render json: user.income, status: :ok
    end

    # SHOW /me
    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end


    private

    def user_params
        params.permit(:username, :name, :income, :password, :password_confirmation)
    end


end
