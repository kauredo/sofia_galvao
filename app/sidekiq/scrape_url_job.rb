# frozen_string_literal: true

class ScrapeUrlJob
  include Sidekiq::Worker
  queue_as :priority

  def perform(url, force)
    ScrapeListingDetails.log("ScrapeJobUrl is being performed for #{url}")
    scraper_service = RealEstateScraperService.new
    scraper_service.scrape_one(url, nil, force:)
    scraper_service.destroy
    ScrapeListingDetails.log('DONE ScrapeUrlJob')
  end
end
