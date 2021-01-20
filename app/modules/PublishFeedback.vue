<template>
  <section class="sx-publishing-follow-up">
    <div
      v-if="showConfirmation"
      class="sx-published-section-confirmation row pa-4"
    >
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
            @click="showConfirmation = false"
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
  </section>
</template>

<script>
module.exports = {
  name: "PublishFeedback",
  data: function() {
    return {
      size: 20,
      checkIconPath: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
      closeIconPath:
        "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z",
      iconColor: "currentColor",
      showConfirmation: true
    };
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
    font-weight: 700;
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
}
</style>
