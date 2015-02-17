class TranslatedPage
  include PageObject
  include URL
  page_url URL.url('User:TranslatorToDa/Bratislava')

  div(:content_text, id: 'mw-content-text')
  h1(:first_heading, id: 'firstHeading')
end
