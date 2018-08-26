class WelcomeController < ApplicationController
  def index
    #Get list of suggested influencers
    @suggested_influencers = Influencer.get_all

    #Get list of starred influencers
    @starred_influencers = []
    StarredInfluencer.all.each {|inf| @starred_influencers << inf.influencer}
  end
end
