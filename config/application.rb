require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
      config.i18n.default_locale = :ja
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
      config.generators do |g|
    end
  end
end
