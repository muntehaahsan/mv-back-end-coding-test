class CreateStarredInfluencers < ActiveRecord::Migration[5.1]
  def change
    create_table :starred_influencers do |t|
      t.references :influencer, foreign_key: true
    end
  end
end
