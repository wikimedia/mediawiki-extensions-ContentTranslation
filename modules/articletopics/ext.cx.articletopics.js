// The module's packageFiles needs to include a least one js file that exports
// the public interface of the module so we are just exporting the orestopics.json virtual file.
module.exports = require( '../articletopics.json' );
