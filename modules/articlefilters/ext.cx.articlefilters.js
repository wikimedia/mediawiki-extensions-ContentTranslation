// The module's packageFiles needs to include a least one js file that exports
// the public interface of the module so we are just exporting the
// articletopics.json and articlecountries.json virtual files.
module.exports = {
	topics: require( '../articletopics.json' ),
	regions: require( '../articlecountries.json' )
};
