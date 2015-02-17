class AnonErrorPage
  include PageObject
  include URL

  div(:content_text, id: 'mw-content-text')
end
