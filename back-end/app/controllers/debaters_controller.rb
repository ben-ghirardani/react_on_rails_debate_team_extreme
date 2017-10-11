class DebatersController < ApplicationController

def debater_params
    params.require(:debater).permit( [ :name, :debate ] )
end

def index
    @debaters = Debater.all
    render :json => @debaters
end

def show
    debater = Debater.find(params[:id])
    render :json => debater
end

def create
    debater = Debater.create( animal_params )
    render :json => debater
end

def update
    debater = Debater.find( params[:id] )
    if debater.update_attributers( debater_params )
        render :json => debater
    else
        render :json => { status: :update_failed }
    end
end

def destroy
    animal = Animal.find( params[:id] )
    if animal.destroy!
        render :json => { status: :success }
    else 
        render :json => { status: :delete_failed }
    end
end

end