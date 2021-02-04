<template>
  <section class="sx-publishing-follow-up">
    <div v-if="showPanel" class="sx-published-section-confirmation row pa-4">
      <div class="sx-published-section-confirmation__icon col shrink">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="size"
            :height="size"
            viewBox="0 0 20 20"
            aria-hidden="true"
            role="presentation"
          >
            <g :fill="iconColor">
              <path :d="checkIconPath" />
            </g>
          </svg>
        </span>
      </div>
      <div class="col">
        <div class="row sx-published-section-confirmation__header">
          <h5
            class="col"
            v-text="$i18n('cx-sx-published-section-confirmation-header')"
          ></h5>
          <div
            class="sx-published-section-confirmation__close col shrink"
            @click="showPanel = false"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :width="size"
                :height="size"
                viewBox="0 0 20 20"
                aria-hidden="true"
                role="presentation"
              >
                <g :fill="iconColor">
                  <path :d="closeIconPath" />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <p
          class="sx-published-section-confirmation__content"
          v-text="$i18n('cx-sx-published-section-confirmation-content')"
        ></p>
      </div>
    </div>
    <hr class="sx-separation-line" />
    <div
      v-if="missingSections.length > 0"
      class="sx-published-section-invitation row pa-4"
      @click="redirectToSX"
    >
      <div class="sx-published-section-invitation__icon col shrink">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="size"
            :height="size"
            viewBox="0 0 20 20"
            aria-hidden="true"
            role="presentation"
          >
            <g :fill="iconColor">
              <path :d="plusIconPath" />
            </g>
          </svg>
        </span>
      </div>
      <div class="col">
        <div class="row sx-published-section-invitation__header">
          <h5
            class="col"
            v-text="$i18n('cx-sx-published-section-invitation-title')"
          ></h5>
        </div>
        <p
          class="sx-published-section-invitation__description"
          v-text="
            $i18n(
              'cx-sx-published-section-invitation-missing-sections-info',
              firstMissingSection,
              remainingMissingSectionLength
            )
          "
        ></p>
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: "PublishFeedback",
  data: function() {
    return {
      size: 20,
      checkIconPath: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
      plusIconPath: "M11 9V4H9v5H4v2h5v5h2v-5h5V9z",
      closeIconPath:
        "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z",
      iconColor: "currentColor",
      showPanel: true,
      missingSections: [],
      siteMapper: new mw.cx.SiteMapper(),
      sourcePageTitle: null,
      sourceLanguage: null,
      targetLanguage: null
    };
  },
  mounted() {
    var urlParams = new URLSearchParams(window.location.search);
    this.sourceTitle = urlParams.get("sx-source-page-title");
    this.sourceLanguage = urlParams.get("sx-source-language");
    this.targetLanguage = urlParams.get("sx-target-language");

    var cxServerParams = [
      this.sourceTitle,
      this.sourceLanguage,
      this.targetLanguage
    ].map(function(param) {
      return encodeURIComponent(param);
    });
    var cxServerSectionSuggestionApiUrl = this.siteMapper.getCXServerUrl(
      "/suggest/sections/" + cxServerParams.join("/")
    );

    var that = this;
    fetch(cxServerSectionSuggestionApiUrl)
      .then(function(response) {
        return response.ok
          ? response.json()
          : Promise.reject(new Error("Failed to load data from server"));
      })
      .then(function(suggestionResult) {
        if (suggestionResult.sections) {
          that.missingSections = Object.keys(suggestionResult.sections.missing);
        }
      });
  },
  computed: {
    firstMissingSection() {
      return this.missingSections[0];
    },
    remainingMissingSectionLength() {
      return this.missingSections.length - 1;
    }
  },
  methods: {
    redirectToSX() {
      window.location.href = this.siteMapper.getCXUrl(
        this.sourceTitle,
        "",
        this.sourceLanguage,
        this.targetLanguage,
        { sx: true }
      );
    }
  }
};
</script>

<style lang="less">
.sx-publishing-follow-up {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.25);
  .row {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }
  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .pa-4 {
    padding: 16px;
  }
  .shrink {
    flex-grow: 0 !important;
    flex-shrink: 1 !important;
  }
  .sx-published-section-confirmation__icon {
    margin-right: 8px;
  }
  .sx-published-section-confirmation__header {
    font-weight: 600;
    color: #202122;
  }
  .sx-published-section-confirmation__content {
    margin-top: 8px;
    font-size: 14px;
    color: #202122;
  }
  .sx-published-section-confirmation__close {
    cursor: pointer;
  }
  .sx-separation-line {
    margin: 0;
    border-top: 0;
    color: #eaecf0;
  }

  /**
   * cursor only exists in desktop devices. So this style is not relevant to our current plan
   * that only targets mobile devices.
   */
  .sx-published-section-invitation {
    cursor: pointer;
  }

  /**
   * :hover pseudoclass only exists in desktop devices. So this style is not relevant to our
   * current plan that only targets mobile devices.
   */
  .sx-published-section-invitation:hover {
    background: #eaf3ff;
  }

  .sx-published-section-invitation__icon {
    margin-right: 8px;
    color: #36c;
  }

  .sx-published-section-invitation__header {
    font-weight: 600;
    color: #36c;
  }
  .sx-published-section-invitation__description {
    margin-top: 4px;
    font-size: 14px;
    color: #54595d;
  }
}
</style>
