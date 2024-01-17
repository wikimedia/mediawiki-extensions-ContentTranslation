<template>
	<section v-if="showPanel" class="sx-recent-edit-entrypoint">
		<div class="sx-recent-edit-entrypoint__top-banner row pa-4">
			<div class="col">
				<div class="row sx-recent-edit-entrypoint__top-banner__header">
					<h5
						class="col"
						v-text="$i18n( 'sx-recent-edit-entrypoint-top-banner-header' )"
					></h5>
					<div
						class="sx-recent-edit-entrypoint__top-banner__close-icon col shrink"
						@click="closeInvite"
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
					class="sx-recent-edit-entrypoint__top-banner__content"
					v-text="$i18n( 'sx-recent-edit-entrypoint-top-banner-content', sourceLanguageAutonym, targetLanguageAutonym )"
				></p>
			</div>
		</div>
		<hr class="sx-recent-edit-entrypoint__separation-line">
		<a
			class="sx-recent-edit-entrypoint__invitation row pa-4"
			:href="sxUrl"
		>
			<div class="sx-recent-edit-entrypoint__invitation__icon col shrink">
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
				<div class="row sx-recent-edit-entrypoint__invitation__header">
					<h5
						class="col"
						v-text="$i18n( 'sx-recent-edit-entrypoint-invitation-button-label', firstMissingEditedSection )"
					></h5>
				</div>
				<p
					class="sx-recent-edit-entrypoint__invitation__details"
					v-text="
						$i18n(
							'sx-recent-edit-entrypoint-invitation-button-details',
							missingSectionLength,
							targetLanguageAutonym
						)
					"
				></p>
			</div>
		</a>
	</section>
</template>

<script>
// @vue/component
module.exports = {
	compilerOptions: { whitespace: 'condense' },
	name: 'RecentEditEntrypointInvitation',
	props: {
		/**
		 * @type {{ language: string, page: string, sections: Array }}
		 */
		recentEdit: {
			type: Object,
			required: true,
			validator: function ( edit ) {
				return edit.language && edit.page && edit.sections;
			}
		},
		missingSections: {
			type: Object,
			required: true
		},
		hiddenInvitationStorageKey: {
			type: String,
			required: true
		}
	},
	data: function () {
		return {
			size: 20,
			plusIconPath: 'M11 9V4H9v5H4v2h5v5h2v-5h5V9z',
			closeIconPath: 'M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z',
			iconColor: 'currentColor',
			showPanel: true,
			siteMapper: new mw.cx.SiteMapper()
		};
	},
	computed: {
		firstMissingEditedSection: function () {
			const sourceMissingSections = Object.keys( this.missingSections );
			const editedSections = ( this.recentEdit && this.recentEdit.sections ) || [];

			for ( let i = 0; i < sourceMissingSections.length; i++ ) {
				const missingSection = sourceMissingSections[ i ];
				if ( editedSections.indexOf( missingSection ) > -1 ) {
					return missingSection;
				}
			}
			return null;
		},
		missingSectionLength: function () {
			return Object.keys( this.missingSections ).length;
		},
		sourceLanguage: function () {
			return this.recentEdit && this.recentEdit.language;
		},
		sourceTitle: function () {
			return this.recentEdit && this.recentEdit.page;
		},
		targetLanguage: function () {
			return this.siteMapper.getCurrentWikiLanguageCode();
		},
		sourceLanguageAutonym: function () {
			return $.uls.data.getAutonym( this.sourceLanguage );
		},
		targetLanguageAutonym: function () {
			return $.uls.data.getAutonym( this.targetLanguage );
		},
		sxUrl: function () {
			return this.siteMapper.getCXUrl(
				this.sourceTitle,
				'',
				this.sourceLanguage,
				this.targetLanguage,
				{ sx: true }
			);
		}
	},
	methods: {
		closeInvite: function () {
			this.showPanel = false;
			const hiddenInvitations = mw.storage.getObject( this.hiddenInvitationStorageKey ) || [];
			hiddenInvitations.push( {
				language: this.sourceLanguage,
				page: this.sourceTitle,
				section: this.firstMissingEditedSection
			} );
			mw.storage.setObject( this.hiddenInvitationStorageKey, hiddenInvitations );
		}
	}
};
</script>

<style lang="less">
// Copy variables from '@wikimedia/codex-design-tokens/theme-wikimedia-ui.css'.
@background-color-base: #fff;
@background-color-progressive-subtle: #eaf3ff;
@color-base: #202122;
@color-progressive: #36c;
@color-subtle: #54595d;

.sx-recent-edit-entrypoint {
	width: 100%;
	position: fixed;
	bottom: 0;
	background: @background-color-base;
	box-shadow: 0 -1px 2px rgba( 0, 0, 0, 0.25 );

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

	&__top-banner {
		&__header {
			font-weight: 600;
			color: @color-base;
		}

		&__close-icon {
			cursor: pointer;
		}

		&__content {
			margin-top: 8px;
			font-size: 14px;
			color: @color-base;
		}
	}

	&__separation-line {
		margin: 0;
		border-top: 0;
		color: #eaecf0;
	}

	&__invitation {
		cursor: pointer;

		&:hover {
			background: @background-color-progressive-subtle;
		}

		&__icon {
			margin-right: 8px;
			color: @color-progressive;
		}

		&__header {
			font-weight: 600;
			color: @color-progressive;
		}

		&__details {
			margin-top: 4px;
			font-size: 14px;
			color: @color-subtle;
		}
	}
}
</style>
