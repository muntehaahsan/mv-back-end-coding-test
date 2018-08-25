class WelcomeController < ApplicationController

  def index
    @suggested_influencers = Influencer.all
  end
end
