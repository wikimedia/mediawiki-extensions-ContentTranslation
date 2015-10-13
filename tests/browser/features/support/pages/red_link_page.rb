class RedLinkPage
  include PageObject

  page_url 'Red_interlanguage_link_test'

  button(:translate_from, class: 'cx-entrypoint-dialog-button-translate-from')
  button(:create_from_scratch, class: 'cx-entrypoint-dialog-button-create-from-scratch')
  button(:uls_settings_apply, class: 'uls-settings-apply')
  button(:uls_more_languages, class: 'uls-more-languages')

  div(:article_content, id: 'mw-content-text')
  div(:contributions_popover, class: 'cx-campaign-contributionsmenu')
  div(:dialog_heading, class: 'cx-entrypoint-dialog__heading')
  div(:input_label, class: 'cx-entrypoint-dialog__title-label')

  text_field(:translated_title, css: '.cx-entrypoint-dialog__title-box-block input')

  li(:personal_contributions_link, id: 'pt-mycontris')
  li(:red_interlanguage_link_item, class: 'cx-new-interlanguage-link')

  span(:trigger_cog, class: 'uls-settings-trigger')

  text_field(:language_filter, id: 'languagefilter')

  def blue_interlanguage_item_with_autonym(autonym)
    browser.li(class: 'interlanguage-link', text: autonym)
  end

  def dialog_close_button
    browser.span(css: '.cx-entrypoint-dialog:not(.hidden) .icon-close')
  end

  def page_creation_dialog(autonym)
    codes = {
      'Nederlands' => 'nl'
    }
    browser.div(id: "cx-entrypoint-dialog-#{codes[autonym]}")
  end

  def red_interlanguage_item_with_autonym(autonym)
    browser.li(class: 'cx-new-interlanguage-link', text: autonym)
  end
end
