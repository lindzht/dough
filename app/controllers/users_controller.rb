class UsersController < ApplicationController

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


    private

    def user_params
        params.permit(:username, :name, :income, :password, :password_confirmation)
    end


end
