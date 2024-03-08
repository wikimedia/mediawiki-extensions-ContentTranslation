// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Test \`ProposedTranslationCard\` test Component output matches snapshot 1`] = `
<mw-card-stub
  class="sx-sentence-selector__proposed-translation col shrink pa-0"
>
  <mw-row-stub
    align="start"
    class="ma-0 no-wrap fill-height"
    direction="column"
    justify="start"
    reverse="false"
    tag="div"
  >
    <proposed-translation-header-stub />
    <mw-col-stub
      class="sx-sentence-selector__proposed-translation__contents px-5"
      grow="false"
      shrink="false"
      style="max-height: calc(100% - 0px);"
      tag="div"
    >
      <!--eslint-disable vue/no-v-html -->
      <section
        dir="ltr"
        lang="es"
      >
        Test translation
      </section>
    </mw-col-stub>
    <mw-col-stub
      class="sx-sentence-selector__proposed-translation__footer"
      grow="false"
      shrink="true"
      tag="div"
    >
      <cdx-button-stub
        action="progressive"
        class="sx-sentence-selector__proposed-translation-edit-button mt-4 mx-2 mb-5"
        disabled="false"
        size="medium"
        weight="quiet"
      >
        <cdx-icon-stub
          class="me-1"
          icon="<path d="m16.77 8 1.94-2a1 1 0 000-1.41l-3.34-3.3a1 1 0 00-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/>"
          iconlabel=""
          size="medium"
        />
         cx-sx-sentence-selector-edit-translation-button-label
      </cdx-button-stub>
      <proposed-translation-action-buttons-stub />
    </mw-col-stub>
  </mw-row-stub>
</mw-card-stub>
`;

exports[`Test \`ProposedTranslationCard\` test Should render Retry MT card inside proposed translation card output when no proposed translation exists 1`] = `
<mw-card-stub
  class="sx-sentence-selector__proposed-translation col shrink pa-0"
>
  <mw-row-stub
    align="start"
    class="ma-0 no-wrap fill-height"
    direction="column"
    justify="start"
    reverse="false"
    tag="div"
  >
    <proposed-translation-header-stub />
    <mw-col-stub
      class="sx-sentence-selector__proposed-translation__contents px-5"
      grow="false"
      shrink="false"
      style=""
      tag="div"
    >
      <!--eslint-disable vue/no-v-html -->
      <retry-mt-card-stub />
    </mw-col-stub>
    <mw-col-stub
      class="sx-sentence-selector__proposed-translation__footer"
      grow="false"
      shrink="true"
      tag="div"
    >
      <!--v-if-->
      <proposed-translation-action-buttons-stub />
    </mw-col-stub>
  </mw-row-stub>
</mw-card-stub>
`;
