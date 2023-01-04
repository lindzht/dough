class ChangeColumnInCategories < ActiveRecord::Migration[6.1]
  def change
    rename_column :categories, :type, :cat_type
  end
end
