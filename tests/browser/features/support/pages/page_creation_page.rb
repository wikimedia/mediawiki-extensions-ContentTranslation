class PageCreationPage
  include PageObject

  h1(:first_heading, id: "firstHeading")

  text_field(:editing_area, id: "wpTextbox1")
end
