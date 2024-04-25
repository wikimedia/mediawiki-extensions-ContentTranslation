<template>
	<div
		class="mint-search-suggestion pt-3 ma-0"
	>
		<div class="col shrink">
			<div
				v-if="page.thumbnail"
				class="mw-ui-thumbnail"
				:style="thumbnailStyle"></div>
			<div
				v-else
				class="mw-ui-thumbnail"
				:style="thumbnailStyle">
				<cdx-icon
					class="thumbnail-placeholder"
					size="lg"
					:icon="cdxIconArticle"></cdx-icon>
			</div>
		</div>
		<div class="mint-search-suggestion-details">
			<div class="row column align-start ma-0 no-wrap fill-height">
				<div class="col shrink mb-1">
					<h5
						class="my-0 mint-search-suggestion__source-title"
					>
						{{ page.title }}
					</h5>
				</div>
				<div class="col shrink mb-1">
					<p
						class="ma-0 mint-search-suggestion__source-description complementary"
					>
						{{ page.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const { computed, defineComponent } = require( 'vue' );
const { CdxIcon } = require( '@wikimedia/codex' );
const { cdxIconArticle } = require( './icons.json' );
const PageSearchResult = require( './pageSearchResult.js' );

// @vue/component
module.exports = defineComponent( {
	name: 'SxSearchArticleSuggestion',
	components: { CdxIcon },
	props: {
		page: {
			type: PageSearchResult,
			required: true
		}
	},
	setup( props ) {
		const thumbnailStyle = computed( () => {
			const style = {
				height: '56px',
				width: '56px'
			};

			const thumbnailSource = props.page.thumbnail && props.page.thumbnail.source;
			if ( thumbnailSource ) {
				style[ 'background-image' ] = `url(${ thumbnailSource })`;
			} else {
				style.color = '#54595d';
				style[ 'background-color' ] = '#eaecf0';
			}

			return style;
		} );

		return { thumbnailStyle, cdxIconArticle };
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.mint-search-suggestion {
  display: flex;
  cursor: pointer;
  line-height: normal;
  margin-block-end: @spacing-50;

  &-details {
    margin-inline-start: 1rem;
  }

  .mw-ui-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .thumbnail-placeholder {
      width: 30px;
      height: 30px;
    }
  }

  & &__source-title {
    padding: 0;
    line-height: 1;
    font-weight: @font-weight-bold;
  }

  &__source-description {
    color: @color-subtle;
  }
}
</style>
