class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
			t.string :author
			t.integer :original_post_id
			t.string :title
			t.integer :score
			t.string :type
			t.integer :parent
			t.text :content
			t.string :url
			t.time :creation_date
			t.string :image_link
      t.timestamps
    end
  end
end
