class Influencer < ActiveRecord::Base
  has_one :starred_influencer

  def self.get_all
    Influencer.where.not(id: StarredInfluencer.pluck(:influencer_id))
  end
end
