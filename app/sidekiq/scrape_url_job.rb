# frozen_string_literal: true

class ScrapeUrlJob
  include Sidekiq::Worker
  require 'rake'
  queue_as :default

  def perform(id)
    Rails.logger.debug "ScrapeJobUrl is being performed for #{id}"
    Rails.application.load_tasks
    Rake::Task['scrape_one'].invoke(id)

    Rails.logger.debug 'DONE'
  end
end
