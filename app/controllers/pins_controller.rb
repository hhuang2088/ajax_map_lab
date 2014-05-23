class PinsController < ApplicationController
  def index
    @pins = Pin.all 
  end

  def new 
    @pin = Pin.new 
  end

  def create 
    @pin = Pin.new(pin_params)
    redirect_to new_pin_path
  end

  private 
  def pin_params 
    params.require(:pin).permit(:longitude, :latitude)
  end
end
