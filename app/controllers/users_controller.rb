class UsersController < ApplicationController


    def create
        user = User.create!(user_params)
        sessions[:user_id] = user.id
        

    end



    private

    def user_params
        params.permit(:username, :name, :income, :password, :password_confirmation)
    end


end
