<template>
  <section class="sx-article-search">
    <mw-input
      v-model="searchInput"
      :icon-size="20"
      :outlined="false"
      :icon="mwIconSearch"
      :placeholder="$i18n('cx-sx-article-search-input-placeholder')"
      type="search"
      :indicator="mwIconClose"
      :indicator-size="20"
      @indicator-clicked="close"
    />
  </section>
</template>

<script>
import { MwInput } from "@/lib/mediawiki.ui";
import { mwIconSearch, mwIconClose } from "@/lib/mediawiki.ui/components/icons";
export default {
  name: "SxArticleSearch",
  components: { MwInput },
  data: () => ({
    mwIconSearch,
    mwIconClose,
    searchInput: ""
  }),
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>
