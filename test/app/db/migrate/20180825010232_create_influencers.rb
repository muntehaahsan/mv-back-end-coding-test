class CreateInfluencers < ActiveRecord::Migration[5.1]
  def change
    create_table :influencers do |t|
      t.string :influencer_full_name
      t.string :influencer_instagram_username
      t.string :influencer_instagram_profile_image
      t.integer :statistics_followers
      t.float :statistics_engagement
    end
  end
end
