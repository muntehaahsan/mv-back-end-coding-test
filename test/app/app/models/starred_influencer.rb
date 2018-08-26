class StarredInfluencer < ActiveRecord::Base
  belongs_to :influencer

  def self.add id
    self.create( influencer_id: id)
  end

  def self.remove id
    self.where(:influencer_id => id).delete_all
  end
end
