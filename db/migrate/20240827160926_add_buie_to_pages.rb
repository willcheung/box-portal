class AddBuieToPages < ActiveRecord::Migration[7.2]
  def change
    add_column :pages, :buie_type, :string
    add_column :pages, :folder_id, :string
  end
end
