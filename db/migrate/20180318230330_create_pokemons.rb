class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
