class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :national_id
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
