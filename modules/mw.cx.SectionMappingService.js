( function () {
	class MwCxSectionMappingService {
		constructor() {
			this.mappings = null;
		}

		/**
		 * Fetch section mappings from CXServer and cache them.
		 *
		 * @param {string} sourceTitle
		 * @param {string} sourceLanguage
		 * @param {string} targetLanguage
		 * @return {Promise<Object[]>} Promise resolving to mappings
		 */
		fetchSectionMappings( sourceTitle, sourceLanguage, targetLanguage ) {
			// If mappings already exist, return them as a resolved promise
			if ( this.mappings ) {
				return Promise.resolve( this.mappings );
			}

			const siteMapper = new mw.cx.SiteMapper();
			const cxserverUrl = siteMapper.getCXServerUrl( '/suggest/sections/$title/$from/$to', {
				$title: sourceTitle,
				$from: sourceLanguage,
				$to: targetLanguage
			} );

			return fetch( cxserverUrl )
				.then( ( response ) => {
					if ( !response.ok ) {
						throw new Error( 'Failed to load data from server' );
					}
					return response.json();
				} )
				.then( ( data ) => {
					this.mappings = data.sections || [];
				} )
				.catch( ( error ) => {
					mw.log.error( 'Error while fetching section mappings:', error );
				} );
		}

		/**
		 * Get mapped target section title, if it exists
		 *
		 * @param {string} sourceSectionTitle
		 * @return {string|null}
		 */
		getMappedPresentSectionTitle( sourceSectionTitle ) {
			if ( !this.mappings || !this.mappings.present ) {
				return null;
			}

			// TODO: Consider moving all string constants to a separate module
			if ( sourceSectionTitle === '__LEAD_SECTION__' ) {
				return sourceSectionTitle;
			}

			return this.mappings.present[ sourceSectionTitle ] || null;
		}

		isSectionPresent( sourceSectionTitle ) {
			return !!mw.cx.sectionMappingService.getMappedPresentSectionTitle( sourceSectionTitle );
		}

		getSourceSectionNumber( sourceSectionTitle ) {
			if ( !this.mappings || !this.mappings.sourceSections ) {
				return null;
			}

			// TODO: Consider moving all string constants to a separate module
			if ( sourceSectionTitle === '__LEAD_SECTION__' ) {
				return 0;
			}

			return this.mappings.sourceSections.findIndex( ( s ) => s === sourceSectionTitle );
		}
	}

	// Expose a singleton instance
	mw.cx.sectionMappingService = new MwCxSectionMappingService();
}() );
