class TranslatedPageHistory
  include PageObject

  page_url 'User:TranslatorToDa/Bratislava?action=history'

  span(:contenttranslation_tag, class: 'mw-tag-marker-contenttranslation')
end
