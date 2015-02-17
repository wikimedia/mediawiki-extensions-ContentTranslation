class RedLinkPage
  include PageObject
  include URL

  page_url URL.url('Red interlanguage link test')

  button(:translate_from, class: 'cx-entrypoint-dialog-button-translate-from')
  button(:create_from_scratch, class: 'cx-entrypoint-dialog-button-create-from-scratch')
  button(:uls_settings_apply, class: 'uls-settings-apply')
  button(:uls_more_languages, class: 'uls-more-languages')

  div(:article_content, id: 'mw-content-text')
  div(:dialog_heading, class: 'cx-entrypoint-dialog__heading')
  div(:input_label, class: 'cx-entrypoint-dialog__title-label')

  text_field(:translated_title, css: '.cx-entrypoint-dialog__title-box-block input')

  li(:red_interlanguage_link_item, class: 'cx-new-interlanguage-link')

  span(:trigger_cog, class: 'uls-settings-trigger')

  text_field(:language_filter, id: 'languagefilter')

  def create_page(text)
    if ENV['MEDIAWIKI_API_URL'].nil?
      abort 'Environment variable MEDIAWIKI_API_URL must be set in order to create a target page for this test'
    end

    client = MediawikiApi::Client.new(ENV['MEDIAWIKI_API_URL'])
    client.log_in(ENV['MEDIAWIKI_USER'], ENV['MEDIAWIKI_PASSWORD'])
    client.create_page('Red interlanguage link test', text)
  end

  def blue_interlanguage_item_with_autonym(autonym)
    @browser.li(class: 'interlanguage-link', text: autonym)
  end

  def dialog_close_button
    @browser.span(css: '.cx-entrypoint-dialog:not(.hidden) .icon-close')
  end

  def page_creation_dialog(autonym)
    codes = {
      'Nederlands' => 'nl'
    }
    @browser.div(id: "cx-entrypoint-dialog-#{codes[autonym]}")
  end

  def red_interlanguage_item_with_autonym(autonym)
    @browser.li(class: 'cx-new-interlanguage-link', text: autonym)
  end
end
