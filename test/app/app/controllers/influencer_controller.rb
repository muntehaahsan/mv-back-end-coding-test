class InfluencerController < ApplicationController
  def add_to_starred_influencers
    StarredInfluencer.add params[:user_id]
    @starred_inf = Influencer.find(params[:user_id])
    respond_to do |format|
      format.js
    end
  end

  def remove_from_starred_influencers
    StarredInfluencer.remove params[:user_id]
    @suggested_inf = Influencer.find(params[:user_id])
    respond_to do |format|
      format.js
    end
  end
end
