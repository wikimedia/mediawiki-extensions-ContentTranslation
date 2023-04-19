// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `SXSentenceSelector Proposed Translation Card Component output matches snapshot 1`
] = `
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
        <div>
          Test translation
        </div>
      </section>
    </mw-col-stub>
    <mw-col-stub
      class="sx-sentence-selector__proposed-translation__footer"
      grow="false"
      shrink="true"
      tag="div"
    >
      <mw-button-stub
        class="sx-sentence-selector__proposed-translation-edit-button pa-5 pt-4"
        depressed="false"
        destructive="false"
        disabled="false"
        icon="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z"
        iconsize="20"
        indicatorsize="12"
        label="cx-sx-sentence-selector-edit-translation-button-label"
        large="false"
        progressive="true"
        type="text"
      />
      <proposed-translation-action-buttons-stub />
    </mw-col-stub>
  </mw-row-stub>
</mw-card-stub>
`;

exports[
  `SXSentenceSelector Proposed Translation Card Should render Retry MT card inside proposed translation card output when no proposed translation exists 1`
] = `
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
      class="sx-sentence-selector__proposed-translation__contents px-5 sx-sentence-selector__proposed-translation__contents--empty"
      grow="false"
      shrink="false"
      style="max-height: calc(100% - 0px);"
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
