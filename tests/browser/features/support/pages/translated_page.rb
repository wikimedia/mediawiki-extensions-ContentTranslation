class TranslatedPage
  include PageObject

  page_url 'User:TranslatorToDa/Bratislava'

  div(:content_text, id: 'mw-content-text')
  h1(:first_heading, id: 'firstHeading')
end
