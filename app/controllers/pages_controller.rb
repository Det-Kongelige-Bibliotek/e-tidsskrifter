class PagesController < UmlautController
  include HighVoltage::StaticPage
  include UmlautConfigurable
  before_filter :set_config

  def set_config
    UmlautConfigurable.set_default_configuration!(umlaut_config)
  end
end
