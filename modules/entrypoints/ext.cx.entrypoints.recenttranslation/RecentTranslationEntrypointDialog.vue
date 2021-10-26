<template>
	<div v-if="showDialog" class="sx-recent-translation-dialog">
		<div class="sx-recent-translation-dialog__overlay"></div>
		<div class="sx-recent-translation-dialog__shell">
			<div class="sx-recent-translation-dialog__header row">
				<div class="sx-recent-translation-dialog__header-text col">
					<h3 v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-header' )"></h3>
				</div>
				<span class="sx-recent-translation-dialog__header-close-icon mw-ui-icon" @click="closeDialog"></span>
			</div>
			<div v-if="missingSections.length > 0" class="sx-recent-translation-dialog__action-switches row">
				<button
					class="sx-recent-translation-dialog__action-switch"
					:class="{ 'sx-recent-translation-dialog__action-switch--enabled': isReviewSelected }"
					@click="selectedOption = 'review'"
					v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-review-switch-text' )"
				></button>
				<button
					class="sx-recent-translation-dialog__action-switch"
					:class="{ 'sx-recent-translation-dialog__action-switch--enabled': isAddSelected }"
					@click="selectedOption = 'add'"
					v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-add-section-switch-text' )"
				></button>
			</div>
			<div
				ref="content"
				class="sx-recent-translation-dialog__content"
				:style="contentStyle"
			>
				<div v-show="isReviewSelected" class="sx-recent-translation-dialog__review-tab">
					<p
						class="sx-recent-translation-dialog__review-lead-text"
						v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-review-lead-text' )"
					></p>
					<ol class="sx-recent-translation-dialog__review-list">
						<li class="sx-recent-translation-dialog__review-list-item">
							<h4 v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-natural-contents-list-item-header' )"></h4>
							<p v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-natural-contents-list-item-details' )"></p>
						</li>
						<li class="sx-recent-translation-dialog__review-list-item">
							<h4 v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-references-list-item-header' )"></h4>
							<p v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-references-list-item-details' )">
							</p>
						</li>
						<li class="sx-recent-translation-dialog__review-list-item">
							<h4 v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-compare-original-list-item-header' )"></h4>
							<p v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-compare-original-list-item-details' )">
							</p>
						</li>
					</ol>
					<button class="sx-recent-translation-dialog__edit-button mw-ui-button mw-ui-progressive" @click="openVE">
						<span class="sx-recent-translation-dialog__edit-icon mw-ui-icon">
						</span>
						<span v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-edit-button-label' )"></span>
					</button>
					<div class="sx-recent-translation-dialog__original-page-link row">
						<a
							class="sx-recent-translation-dialog__original-page-anchor col"
							:href="originalPageUrl"
							target="_blank"
							v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-original-page-anchor', sourceLanguageAutonym )"
						></a>
						<a
							class="sx-recent-translation-dialog__original-page-icon-anchor col shrink"
							:href="originalPageUrl"
							target="_blank"
						>
							<span class="sx-recent-translation-dialog__original-page-icon mw-ui-icon"></span>
						</a>
					</div>
				</div>
				<div v-show="isAddSelected" class="sx-recent-translation-dialog__add-sections-tab">
					<p
						class="sx-recent-translation-dialog__add-sections-tab__lead-text"
						v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-add-sections-lead-text' )"
					></p>
					<button class="sx-recent-translation-dialog__translate-button mw-ui-button mw-ui-progressive" @click="goToSX">
						<span class="sx-recent-translation-dialog__language-icon mw-ui-icon">
						</span>
						<span v-text="$i18n( 'sx-recent-translation-entrypoint-dialog-translate-button-label' )"></span>
					</button>
					<div
						class="sx-recent-translation-dialog__translate-secondary-notice"
						v-text="translateSecondaryText"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
var siteMapper = new mw.cx.SiteMapper();

// @vue/component
module.exports = {
	name: 'RecentTranslationEntrypointDialog',
	data: function () {
		return {
			showDialog: true,
			contentHeight: 0,
			missingSections: [],
			selectedOption: 'review',
			sourceLanguage: mw.config.get( 'wgSectionTranslationSourceLanguage' ),
			sourceTitle: mw.config.get( 'wgSectionTranslationSourceTitle' ),
			targetLanguage: siteMapper.getCurrentWikiLanguageCode()
		};
	},
	computed: {
		contentStyle: function () {
			return {
				'min-height': String( this.contentHeight ) + 'px'
			};
		},
		isReviewSelected: function () {
			return this.selectedOption === 'review';
		},
		isAddSelected: function () {
			return this.selectedOption === 'add';
		},
		originalPageUrl: function () {
			return siteMapper.getPageUrl(
				this.sourceLanguage,
				this.sourceTitle
			);
		},
		sourceLanguageAutonym: function () {
			return $.uls.data.getAutonym( this.sourceLanguage );
		},
		translateSecondaryText: function () {
			switch ( this.missingSections.length ) {
				case 1:
					return this.$i18n( 'sx-recent-translation-entrypoint-dialog-translate-notice-text-one-missing', this.missingSections[ 0 ] );
				case 2:
					return this.$i18n( 'sx-recent-translation-entrypoint-dialog-translate-notice-text-two-missing', this.missingSections[ 0 ], this.missingSections[ 1 ] );
				default:
					return this.$i18n( 'sx-recent-translation-entrypoint-dialog-translate-notice-text-more-missing', this.missingSections[ 0 ], this.missingSections[ 1 ] );
			}
		}
	},
	methods: {
		closeDialog: function () {
			this.showDialog = false;
		},
		openVE: function () {
			var router = mw.loader.require( 'mediawiki.router' );
			router.navigate( '/editor/all' );
			this.closeDialog();
		},
		getSectionSuggestions: function () {
			var cxServerParams, that, cxServerSectionSuggestionApiUrl;

			cxServerParams = [
				this.sourceTitle,
				this.sourceLanguage,
				this.targetLanguage
			].map( function ( param ) {
				return encodeURIComponent( param );
			} );

			cxServerSectionSuggestionApiUrl = siteMapper.getCXServerUrl(
				'/suggest/sections/' + cxServerParams.join( '/' )
			);

			that = this;

			fetch( cxServerSectionSuggestionApiUrl )
				.then( function ( response ) {
					return response.ok ?
						response.json() :
						Promise.reject( new Error( 'Failed to load data from server' ) );
				} )
				.then( function ( suggestionResult ) {
					if ( suggestionResult.sections ) {
						that.missingSections = Object.keys( suggestionResult.sections.missing );
					}
				} );
		},
		goToSX: function () {
			window.location.href = siteMapper.getCXUrl(
				this.sourceTitle,
				null,
				this.sourceLanguage,
				this.targetLanguage,
				{ campaign: 'mfrecenttranslation', sx: true }
			);
		}
	},
	mounted: function () {
		var that = this;
		this.$nextTick( function () {
			that.contentHeight = Math.max( that.contentHeight, that.$refs.content.clientHeight );
		} );
		this.getSectionSuggestions();
	}
};
</script>

<style lang="less">
// Copying variables from "mediawiki.ui/variables.less"
@background-color-base: #fff;
@color-base: #202122;
@color-base--inverted: #fff;
@color-primary: #36c;
@color-base--subtle: #72777d;
@colorGray14: #eaecf0;
@colorGray15: #f8f9fa;
@border-style-base: solid;
@border-width-base: 1px;

.icon(@path) {
  background: center / contain no-repeat url( @path );
}

.sx-recent-translation-dialog {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 100;

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

  .shrink {
    flex-grow: 0 !important;
    flex-shrink: 1 !important;
  }

  p {
    color: @color-base;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__shell {
    background-color: @background-color-base;
    position: relative;
    max-width: 400px;
    margin: 0 12px;
  }

  &__header {
    padding: 12px;
    &-close-icon {
      cursor: pointer;
      .icon("../images/close-icon.svg")
    }
    h3 {
      padding: 0;
      font-size: 16px;
    }
  }

  &__action-switches {
    padding: 0 16px;
    background-color: @colorGray15;
    border-top: @border-style-base @border-width-base @colorGray14;
    border-bottom: @border-style-base @border-width-base @colorGray14;
  }
  &__action-switch {
    padding: 12px 0;
    font-weight: bold;
    &--enabled {
      border-bottom: solid 3px @color-base;
    }
    &:not(:last-of-type) {
      [ dir='ltr' ] & {
        margin-right: 16px;
      }

      [ dir='rtl' ] & {
        margin-left: 16px;
      }
    }
  }

  &__content {
    padding: 16px;
    box-sizing: border-box;
  }
  &__review-tab {
    height: 100%;
  }
  & &__review-lead-text {
    margin: 0 0 20px 0;
  }
  & &__review-list {
    // reset list numbering
    counter-reset: review-list-counter;
    list-style: none;
    padding-left: 0;
    position: relative;

    &-item {
      [ dir='ltr' ] & {
        padding-left: 20px;
      }

      [ dir='rtl' ] & {
        padding-right: 20px;
      }
      // Increase counter for each item
      counter-increment: review-list-counter;
      list-style-type: none;
      position: relative;
      // Styles for list number
      &:before {
        font-family: sans-serif;
        content: counter(review-list-counter) ".";
        display: inline-block;
        font-weight: bold;
        position: absolute;
        left: 0;
        top: -2px;
      }
      h4 {
        padding: 0;
        font-size: 16px;
        font-weight: bold;
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
  & &__edit-button {
    margin-top: 36px;
    [ dir='ltr' ] & {
      margin-left: 12px;
    }

    [ dir='rtl' ] & {
      margin-right: 12px;
    }
  }
  & &__translate-button {
    margin-top: 24px;
  }
  &__edit-icon {
    .icon("../images/edit-icon.svg");
  }
  &__language-icon {
    .icon("../images/language-icon.svg");
  }
  &__original-page {
    &-link {
      margin-top: 20px;
      margin-bottom: 8px;
      [ dir='ltr' ] & {
        margin-left: 8px;
      }

      [ dir='rtl' ] & {
        margin-right: 8px;
      }
    }
    &-anchor {
      font-weight: 600;
      color: @color-primary;
    }
    &-icon-anchor {
      span {
        .icon("../images/external-link-icon.svg");
      }
    }
  }
  &__add-sections-tab {
    height: 100%;
    & &__lead-text {
      margin: 0;
    }
  }
  &__translate-secondary-notice {
    margin-top: 16px;
    color: @color-base--subtle;
    font-size: 14px;
  }
}
</style>