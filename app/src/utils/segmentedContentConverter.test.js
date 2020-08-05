const testTitle0 = "Test Title A";
const testTitle1 = "Test Title B";
const testContent0 = "Test String A0";
const testContent1 = "Test String B0";
const testContent2 = "Test String B1";
const html = `
<html>
  <body>
    <section data-mw-section-number="0" id="cxSourceSection0" rel="cx:Section">
      <span class="cx-segment" data-segmentid="112">Ignored test string</span>
    </section>
    <section data-mw-section-number="1" id="cxSourceSection2" rel="cx:Section">
      <h2>
        <span class="cx-segment" data-segmentid="89">${testTitle0}</span>
      </h2>
    </section>
    <section data-mw-section-number="1" id="cxSourceSection3" rel="cx:Section">
      <p id="mwGw">
        <span class="cx-segment" data-segmentid="123">${testContent0}</span>
    </section>
    <section data-mw-section-number="2" id="cxSourceSection4" rel="cx:Section">
      <h2><span class="cx-segment" data-segmentid="141">${testTitle1}</span></h2>
    </section>
    <section data-mw-section-number="2" id="cxSourceSection5" rel="cx:Section">
      <p id="mwGw">
        <span class="cx-segment" data-segmentid="142">${testContent1}</span>
    </section>
    <section data-mw-section-number="2" id="cxSourceSection6" rel="cx:Section">
      <p id="mwGw">
        <span class="cx-segment" data-segmentid="143">${testContent2}</span>
    </section>
  </body>
</html>
`;

import segmentedContentConverter from "./segmentedContentConverter";
import PageSection from "@/wiki/cx/models/pageSection";

describe("SegmentedContentConverter test", () => {
  it("convertSegmentedContentToPageSections method creates and returns expected array of pageSection models", () => {
    const pageSections = segmentedContentConverter.convertSegmentedContentToPageSections(
      html
    );
    expect(
      pageSections.every(pageSection => pageSection instanceof PageSection)
    ).toBe(true);
    expect(pageSections[0].title).toBe(testTitle0);
    expect(pageSections[1].title).toBe(testTitle1);
    expect(pageSections[0].html).toBe(testContent0);
    expect(pageSections[1].html).toBe(testContent1 + testContent2);
  });
});
