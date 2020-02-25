class AddUpdatedToPOsts < ActiveRecord::Migration[6.0]
	def change
		add_column :posts, :updated, :boolean, default: false
	end
	
end
