const PageResult = require( './pageSearchResult.js' );
const useState = require( './useState.js' );
const useApi = require( './useApi.js' );
const useCXServerToken = require( './useCXServerToken.js' );
const { ref } = require( 'vue' );

const useTargetTitle = () => {
	const { sourceLanguage, targetLanguage } = useState();
	const { getSuggestedTargetTitle } = useApi();
	const { cxServerToken } = useCXServerToken();
	const targetTitle = ref( null );

	/**
	 * @param {PageResult} pageResult
	 */
	const initializeTargetTitle = ( pageResult ) => {
		const pageResultTargetTitle = pageResult.getTitleByLanguage(
			targetLanguage.value
		);
		if ( pageResultTargetTitle ) {
			targetTitle.value = pageResultTargetTitle;
		} else {
			getSuggestedTargetTitle(
				pageResult.sourceTitle,
				sourceLanguage.value,
				targetLanguage.value,
				cxServerToken.value
			).then( ( suggestedTargetTitle ) => {
				targetTitle.value = suggestedTargetTitle;
			} ).catch( ( error ) => {
				mw.log.error( error.message );
				targetTitle.value = '';
			} );
		}
	};

	return {
		initializeTargetTitle,
		targetTitle
	};
};

module.exports = useTargetTitle;
