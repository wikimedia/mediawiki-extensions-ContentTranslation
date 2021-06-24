import {
  prependNewSectionToAppendixSection,
  cleanupHtml,
  calculateNewSectionNumber
} from "./publishHelper";
import PageSection from "../wiki/cx/models/pageSection";
import SubSection from "../wiki/cx/models/subSection";
import Page from "../wiki/mw/models/page";

const cleanNewContent = `<p id="mw9w">La Luna formó 4.51 miles de millones años hace,[más bajos-alfa 6] o incluso 100 millones de años más tempranos, algunos 50 millones de años después del origen del Sistema Solar, cuando la búsqueda publicada en 2019 sugiere.</p>\n`;

const cleanAppendixContent = `
<ul><li id="mwBBA">Satélites naturales de <a href="./Satélites_de_Marte" rel="mw:WikiLink">Marte</a><span id="mwBBI" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Júpiter" rel="mw:WikiLink">Júpiter</a><span id="mwBBQ" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Saturno" rel="mw:WikiLink">Saturno</a><span id="mwBBY" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Urano" rel="mw:WikiLink">Urano</a><span id="mwBBg" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Neptuno" rel="mw:WikiLink">Neptuno</a><span id="mwBBo" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Plutón" rel="mw:WikiLink">Plutón</a><span id="mwBBw" typeof="mw:Entity">&nbsp;</span>· <a href="./Disnomia_(satélite)" rel="mw:WikiLink">Eris</a><span id="mwBB4" typeof="mw:Entity">&nbsp;</span>· <a href="./Satélites_de_Haumea" rel="mw:WikiLink">Haumea</a></li>
<li id="mwBCA"><a href="./Satélite_natural" rel="mw:WikiLink">Satélite natural</a></li>
<li id="mwBCI"><a href="./Exploración_de_la_Luna" rel="mw:WikiLink">Exploración de la Luna</a></li>
<li id="mwBCQ"><a href="./Agua_lunar" rel="mw:WikiLink">Agua lunar</a></li>
<li id="mwBCY"><a href="./Colonización_de_la_Luna" rel="mw:WikiLink">Colonización de la Luna</a></li>
<li id="mwBCg"><a href="./Apolo_11" rel="mw:WikiLink">Apolo XI</a></li>
<li id="mwBCo"><a href="./Fase_lunar" rel="mw:WikiLink">Fase lunar</a></li>
<li id="mwBCw"><a href="./Claro_de_luna_(astronomía)" rel="mw:WikiLink">Claro de luna</a></li>
<li id="mwBC4"><a href="./Mitología_lunar" rel="mw:WikiLink">Mitología lunar</a></li>
<li id="mwBDA"><a href="./Anexo:Objetos_artificiales_en_la_Luna" rel="mw:WikiLink">Anexo:Objetos artificiales en la Luna</a></li>
<li id="mwBDI"><a href="./Anexo:Satélites_artificiales_de_la_Luna" rel="mw:WikiLink">Anexo:Satélites artificiales de la Luna</a></li>
<li id="mwBDQ"><a href="./Anexo:Viajes_ficticios_a_la_Luna_en_la_literatura" rel="mw:WikiLink">Anexo:Viajes ficticios a la Luna en la literatura</a></li>
<li id="mwBDY"><a href="./Turismo_en_la_Luna" rel="mw:WikiLink">Turismo en la Luna</a></li></ul>`;

describe("publish helper test", () => {
  it("prepend new section to appendix section", () => {
    const expected = `<h2>Formación</h2>\n${cleanNewContent}\n<h2>Véase también</h2>${cleanAppendixContent}`;
    expect(
      prependNewSectionToAppendixSection(
        getTranslatedSection(),
        getAppendixSection()
      )
    ).toEqual(expected);
  });

  it("calculateNewSectionNumber test", () => {
    const createEl = tag => {
      const root = document.createElement("section");
      const child = document.createElement(tag);
      root.appendChild(child);

      return root;
    };
    const sections = [
      new PageSection({
        id: 1,
        title: "Test title 1",
        subSections: [
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("div") })
        ]
      }),
      new PageSection({
        id: 2,
        title: "Test title 2",
        subSections: [
          new SubSection({ node: createEl("h1") }),
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("h2") }),
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("h3") }),
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("h3") }),
          new SubSection({ node: createEl("div") })
        ]
      }),
      new PageSection({
        id: 3,
        title: "Test title 3",
        subSections: [
          new SubSection({ node: createEl("h1") }),
          new SubSection({ node: createEl("div") }),
          new SubSection({ node: createEl("div") })
        ]
      }),
      new PageSection({
        id: 4,
        title: "Appendix1"
      }),
      new PageSection({
        id: 5,
        title: "Appendix2"
      })
    ];
    const targetPage = new Page({
      sections
    });
    expect(
      calculateNewSectionNumber("Test title 3", "Appendix1", targetPage)
    ).toBe(5);
    expect(calculateNewSectionNumber("", "Appendix1", targetPage)).toBe(6);
    expect(calculateNewSectionNumber("", "", targetPage)).toBe("new");
  });

  it("calculateNewSectionNumber with empty target page", () => {
    expect(
      calculateNewSectionNumber("Random title", "Random appendix", undefined)
    ).toBe(0);
  });
});

/**
 * @return {PageSection}
 */
function getTranslatedSection() {
  const newSection = new PageSection();
  newSection.translatedTitle = "Formación";
  newSection.editedTranslation =
    '<p id="mw9w"><span class="cx-segment" data-segmentid="414">La Luna formó 4.51 miles de millones años hace,[más bajos-alfa 6] o incluso 100 millones de años más tempranos, algunos 50 millones de años después del origen del Sistema Solar, cuando la búsqueda publicada en 2019 sugiere.</span></p>\n';

  return newSection;
}

/**
 * @return {PageSection}
 */
function getAppendixSection() {
  const sectionNode = document.createElement("ul");
  sectionNode.innerHTML = `<li id="mwBBA"><span class="cx-segment" data-segmentid="1201">Satélites naturales de <a class="cx-link" data-linkid="1202" href="./Satélites_de_Marte" id="mwBBE" rel="mw:WikiLink" title="Satélites de Marte">Marte</a><span id="mwBBI" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1203" href="./Satélites_de_Júpiter" id="mwBBM" rel="mw:WikiLink" title="Satélites de Júpiter">Júpiter</a><span id="mwBBQ" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1204" href="./Satélites_de_Saturno" id="mwBBU" rel="mw:WikiLink" title="Satélites de Saturno">Saturno</a><span id="mwBBY" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1205" href="./Satélites_de_Urano" id="mwBBc" rel="mw:WikiLink" title="Satélites de Urano">Urano</a><span id="mwBBg" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1206" href="./Satélites_de_Neptuno" id="mwBBk" rel="mw:WikiLink" title="Satélites de Neptuno">Neptuno</a><span id="mwBBo" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1207" href="./Satélites_de_Plutón" id="mwBBs" rel="mw:WikiLink" title="Satélites de Plutón">Plutón</a><span id="mwBBw" typeof="mw:Entity">&nbsp;</span>· <a class="cx-link" data-linkid="1208" href="./Disnomia_(satélite)" id="mwBB0" rel="mw:WikiLink" title="Disnomia (satélite)">Eris</a><span id="mwBB4" typeof="mw:Entity">&nbsp;</span>· <a class="mw-redirect cx-link" data-linkid="1209" href="./Satélites_de_Haumea" id="mwBB8" rel="mw:WikiLink" title="Satélites de Haumea">Haumea</a></span></li>
<li id="mwBCA"><a class="cx-link" data-linkid="1211" href="./Satélite_natural" id="mwBCE" rel="mw:WikiLink" title="Satélite natural"><span class="cx-segment" data-segmentid="1210">Satélite natural</span></a></li>
<li id="mwBCI"><a class="cx-link" data-linkid="1213" href="./Exploración_de_la_Luna" id="mwBCM" rel="mw:WikiLink" title="Exploración de la Luna"><span class="cx-segment" data-segmentid="1212">Exploración de la Luna</span></a></li>
<li id="mwBCQ"><a class="cx-link" data-linkid="1215" href="./Agua_lunar" id="mwBCU" rel="mw:WikiLink" title="Agua lunar"><span class="cx-segment" data-segmentid="1214">Agua lunar</span></a></li>
<li id="mwBCY"><a class="cx-link" data-linkid="1217" href="./Colonización_de_la_Luna" id="mwBCc" rel="mw:WikiLink" title="Colonización de la Luna"><span class="cx-segment" data-segmentid="1216">Colonización de la Luna</span></a></li>
<li id="mwBCg"><a class="cx-link" data-linkid="1219" href="./Apolo_11" id="mwBCk" rel="mw:WikiLink" title="Apolo 11"><span class="cx-segment" data-segmentid="1218">Apolo XI</span></a></li>
<li id="mwBCo"><a class="cx-link" data-linkid="1221" href="./Fase_lunar" id="mwBCs" rel="mw:WikiLink" title="Fase lunar"><span class="cx-segment" data-segmentid="1220">Fase lunar</span></a></li>
<li id="mwBCw"><a class="cx-link" data-linkid="1223" href="./Claro_de_luna_(astronomía)" id="mwBC0" rel="mw:WikiLink" title="Claro de luna (astronomía)"><span class="cx-segment" data-segmentid="1222">Claro de luna</span></a></li>
<li id="mwBC4"><a class="cx-link" data-linkid="1225" href="./Mitología_lunar" id="mwBC8" rel="mw:WikiLink" title="Mitología lunar"><span class="cx-segment" data-segmentid="1224">Mitología lunar</span></a></li>
<li id="mwBDA"><a class="cx-link" data-linkid="1227" href="./Anexo:Objetos_artificiales_en_la_Luna" id="mwBDE" rel="mw:WikiLink" title="Anexo:Objetos artificiales en la Luna"><span class="cx-segment" data-segmentid="1226">Anexo:Objetos artificiales en la Luna</span></a></li>
<li id="mwBDI"><a class="cx-link" data-linkid="1229" href="./Anexo:Satélites_artificiales_de_la_Luna" id="mwBDM" rel="mw:WikiLink" title="Anexo:Satélites artificiales de la Luna"><span class="cx-segment" data-segmentid="1228">Anexo:Satélites artificiales de la Luna</span></a></li>
<li id="mwBDQ"><a class="mw-redirect cx-link" data-linkid="1231" href="./Anexo:Viajes_ficticios_a_la_Luna_en_la_literatura" id="mwBDU" rel="mw:WikiLink" title="Anexo:Viajes ficticios a la Luna en la literatura"><span class="cx-segment" data-segmentid="1230">Anexo:Viajes ficticios a la Luna en la literatura</span></a></li>
<li id="mwBDY"><a class="cx-link" data-linkid="1233" href="./Turismo_en_la_Luna" id="mwBDc" rel="mw:WikiLink" title="Turismo en la Luna"><span class="cx-segment" data-segmentid="1232">Turismo en la Luna</span></a></li>`;

  const subSection = new SubSection({
    sentences: [],
    node: sectionNode
  });

  return new PageSection({
    id: "25",
    title: "Véase también",
    subSections: [subSection]
  });
}

const html = `<p id="mwAQI"><span class="cx-segment" data-segmentid="186">Sal de mar y recientemente mined sal (mucho del cual es <a class="cx-link" data-cx="{&quot;adapted&quot;:true,&quot;sourceTitle&quot;:{&quot;title&quot;:&quot;Sea salt&quot;,&quot;thumbnail&quot;:{&quot;source&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Salt_Farmers_-_Pak_Thale-edit1.jpg/80px-Salt_Farmers_-_Pak_Thale-edit1.jpg&quot;,&quot;width&quot;:80,&quot;height&quot;:53},&quot;description&quot;:&quot;Salt produced from the evaporation of seawater&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q282694&quot;},&quot;pagelanguage&quot;:&quot;en&quot;},&quot;targetTitle&quot;:{&quot;title&quot;:&quot;Sal marina&quot;,&quot;thumbnail&quot;:{&quot;source&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ses_Salines-Eivissa.JPG/80px-Ses_Salines-Eivissa.JPG&quot;,&quot;width&quot;:80,&quot;height&quot;:60},&quot;description&quot;:&quot;sal producida a través de la evaporación de agua de mar&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q282694&quot;},&quot;pagelanguage&quot;:&quot;es&quot;},&quot;targetFrom&quot;:&quot;link&quot;}" data-linkid="187" href="Sal marina" id="mwAQg" rel="mw:WikiLink" title="Sal marina">sal de mar</a>  de mares prehistóricos) también contener cantidades pequeñas de <a class="cx-link" data-cx="{&quot;adapted&quot;:true,&quot;sourceTitle&quot;:{&quot;title&quot;:&quot;Trace element&quot;,&quot;description&quot;:&quot;Element of low concentration&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q351792&quot;},&quot;pagelanguage&quot;:&quot;en&quot;},&quot;targetTitle&quot;:{&quot;title&quot;:&quot;Elementos traza&quot;,&quot;description&quot;:&quot;elemento químico cuya concentración (u otra medida de cantidad) es muy baja&quot;,&quot;pageprops&quot;:{&quot;wikibase_item&quot;:&quot;Q351792&quot;},&quot;pagelanguage&quot;:&quot;es&quot;},&quot;targetFrom&quot;:&quot;link&quot;}" data-linkid="188" href="Elementos traza" id="mwAQk" rel="mw:WikiLink" title="Elementos traza">oligoelementos</a> (cuáles en estas cantidades pequeñas son generalmente bien para planta y salud animal [la cita necesitada]).<link about="#mwt140" data-cx="{&quot;adapted&quot;:false,&quot;sourceTitle&quot;:&quot;Category:All articles with unsourced statements&quot;}" data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;citation needed&quot;,&quot;href&quot;:&quot;./Template:Citation_needed&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;October 2018&quot;}},&quot;i&quot;:0}}]}" href="./Category:All_articles_with_unsourced_statements" id="mwAQo" rel="mw:PageProp/Category" typeof="mw:Transclusion"><link about="#mwt140" href="./Category:Articles_with_unsourced_statements_from_October_2018" rel="mw:PageProp/Category"> </span></p>`;

const cleanedHtml = `<p id="mwAQI">Sal de mar y recientemente mined sal (mucho del cual es <a href="Sal marina" rel="mw:WikiLink">sal de mar</a>  de mares prehistóricos) también contener cantidades pequeñas de <a href="Elementos traza" rel="mw:WikiLink">oligoelementos</a> (cuáles en estas cantidades pequeñas son generalmente bien para planta y salud animal [la cita necesitada]).<link about="#mwt140" data-mw="{&quot;parts&quot;:[{&quot;template&quot;:{&quot;target&quot;:{&quot;wt&quot;:&quot;citation needed&quot;,&quot;href&quot;:&quot;./Template:Citation_needed&quot;},&quot;params&quot;:{&quot;date&quot;:{&quot;wt&quot;:&quot;October 2018&quot;}},&quot;i&quot;:0}}]}" href="./Category:All_articles_with_unsourced_statements" id="mwAQo" rel="mw:PageProp/Category" typeof="mw:Transclusion"><link about="#mwt140" href="./Category:Articles_with_unsourced_statements_from_October_2018" rel="mw:PageProp/Category"> </p>`;

describe("ContentCleaner test", () => {
  it("cleanupHtml method removes unwanted tags and attributes", () => {
    expect(cleanupHtml(html)).toBe(cleanedHtml);
  });
});
