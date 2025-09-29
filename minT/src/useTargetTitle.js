const PageResult = require( './pageSearchResult.js' );
const useState = require( './useState.js' );
const useApi = require( './useApi.js' );
const useCXServerToken = require( './useCXServerToken.js' );
const { ref } = require( 'vue' );
const getAutonym = $.uls.data.getAutonym;

const useTargetTitle = () => {
	const { sourceLanguage, targetLanguage } = useState();
	const { getSuggestedTargetTitleUsingMinT } = useApi();
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
			getSuggestedTargetTitleUsingMinT(
				pageResult.sourceTitle,
				sourceLanguage.value,
				targetLanguage.value,
				cxServerToken.value
			).then( ( suggestedTargetTitle ) => {
				targetTitle.value = suggestedTargetTitle;
			} ).catch( ( error ) => {
				const sourceLanguageAutonym = getAutonym( sourceLanguage.value );
				targetTitle.value = targetTitle.value = `${ pageResult.title } (${ sourceLanguageAutonym })`;
				mw.log.error( error.message );
			} );
		}
	};

	return {
		initializeTargetTitle,
		targetTitle
	};
};

module.exports = useTargetTitle;
