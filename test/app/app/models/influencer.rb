class Influencer < ActiveRecord::Base
  has_many :starred_influencers
end
