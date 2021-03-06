class Api::PokemonsController < ApplicationController
  include HTTParty

  before_action :set_pokemon, only: [:update, :destroy]

  def pokedex
    response = HTTParty.get(params[:url])
    render json: JSON.parse(response.body)
  end 

  def index
    render json: Pokemon.all
  end

  def create
    pokemon = Pokemon.new(pokemon_params)

    if pokemon.save
      render json: pokemon
    else
      render json: pokemon.errors, status: 422
    end
  end

  def update
    if @pokemon.update(pokemon_params)
      render json: @pokemon
    else 
      render json: @pokemon.errors, status: 422
    end
  end

  def destroy
    @pokemon.destroy
  end

  private
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
    end

    def pokemon_params
      params.require(:pokemon).permit(:name, :national_id, :type, :description)
    end

end
