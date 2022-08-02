import { cleanupHtml } from "./publishHelper";

const html = `<p id="mwAQI"><span class="cx-segment" data-segmentid="186">Sal de mar y recientemente mined sal (mucho del cual es <a class="cx-link" data-cx="{&quot;adapted&quot;:true,&quot;sourceTitle&quot;:{&quot;title&quot;:&quot;Sea salt&quot;,&quot;thumbnail&quot;:{&quot;source&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Salt_Farmers_-_Pak_Thale-edit1.jpg/80px-Salt_Farmers_-_Pak_Thale-edit1.jpg&quot;,&quot;width&quot;:80,&quot;height&quot;:53},&quot;description&quot;:&quot;Salt produced from the evaporation of seawater&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q282694&quot;},&quot;pagelanguage&quot;:&quot;en&quot;},&quot;targetTitle&quot;:{&quot;title&quot;:&quot;Sal marina&quot;,&quot;thumbnail&quot;:{&quot;source&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ses_Salines-Eivissa.JPG/80px-Ses_Salines-Eivissa.JPG&quot;,&quot;width&quot;:80,&quot;height&quot;:60},&quot;description&quot;:&quot;sal producida a través de la evaporación de agua de mar&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q282694&quot;},&quot;pagelanguage&quot;:&quot;es&quot;},&quot;targetFrom&quot;:&quot;link&quot;}" data-linkid="187" href="Sal marina" id="mwAQg" rel="mw:WikiLink" title="Sal marina">sal de mar</a>  de mares prehistóricos) también contener cantidades pequeñas de <a class="cx-link" data-cx="{&quot;adapted&quot;:true,&quot;sourceTitle&quot;:{&quot;title&quot;:&quot;Trace element&quot;,&quot;description&quot;:&quot;Element of low concentration&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q351792&quot;},&quot;pagelanguage&quot;:&quot;en&quot;},&quot;targetTitle&quot;:{&quot;title&quot;:&quot;Elementos traza&quot;,&quot;description&quot;:&quot;elemento químico cuya concentración (u otra medida de cantidad) es muy baja&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q351792&quot;},&quot;pagelanguage&quot;:&quot;es&quot;},&quot;targetFrom&quot;:&quot;link&quot;}" data-linkid="188" href="Elementos traza" id="mwAQk" rel="mw:WikiLink" title="Elementos traza">oligoelementos</a> (cuáles en estas cantidades pequeñas son generalmente bien para planta y salud animal [la cita necesitada]).<link about="#mwt140" data-cx="{&quot;adapted&quot;:false,&quot;sourceTitle&quot;:&quot;Category:All articles with unsourced statements&quot;}" data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;citation needed&quot;,&quot;href&quot;:&quot;./Template:Citation_needed&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;October 2018&quot;}},&quot;i&quot;:0}}]}" href="./Category:All_articles_with_unsourced_statements" id="mwAQo" rel="mw:PageProp/Category" typeof="mw:Transclusion"><link about="#mwt140" href="./Category:Articles_with_unsourced_statements_from_October_2018" rel="mw:PageProp/Category"> </span></p>`;

const cleanedHtml = `<p id="mwAQI">Sal de mar y recientemente mined sal (mucho del cual es <a href="Sal marina" rel="mw:WikiLink">sal de mar</a>  de mares prehistóricos) también contener cantidades pequeñas de <a href="Elementos traza" rel="mw:WikiLink">oligoelementos</a> (cuáles en estas cantidades pequeñas son generalmente bien para planta y salud animal [la cita necesitada]).<link about="#mwt140" data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;citation needed&quot;,&quot;href&quot;:&quot;./Template:Citation_needed&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;October 2018&quot;}},&quot;i&quot;:0}}]}" href="./Category:All_articles_with_unsourced_statements" id="mwAQo" rel="mw:PageProp/Category" typeof="mw:Transclusion"><link about="#mwt140" href="./Category:Articles_with_unsourced_statements_from_October_2018" rel="mw:PageProp/Category"> </p>`;

describe("ContentCleaner test", () => {
  it("cleanupHtml method removes unwanted tags and attributes", () => {
    expect(cleanupHtml(html)).toBe(cleanedHtml);
  });

  it("should replace cx-links properly", () => {
    const htmlWithLink = `
      <div>
        <a
          id="mwGQ"
          href="./Hawaii (agwaetiti)"
          rel="mw:WikiLink"
          class="cx-link"
          data-cx='{"adapted":false,"sourceTitle":{"title":"Hawaii (island)","thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Island_of_Hawai%27i_-_Landsat_mosaic.jpg/80px-Island_of_Hawai%27i_-_Landsat_mosaic.jpg","width":80,"height":80},"description":"Largest of the Hawaiian islands","pageprops":{"wikibase_item":"Q68740"},"pagelanguage":"en"},"targetFrom":"mt"}'
          data-linkid="132"
          title="Hawaii (agwaetiti)"
        >
          <span id="mwGg">Span text</span>
          Extra text
        </a>
      </div>
    `;

    const expected = `
      <div>
        
          <span id="mwGg">Span text</span>
          Extra text
        
      </div>
    `;
    expect(cleanupHtml(htmlWithLink)).toBe(expected);
  });
});
