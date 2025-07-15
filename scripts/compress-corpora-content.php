<?php
declare( strict_types = 1 );

/**
 * Maintenance script to compress content in the cxc_corpora table.
 *
 * @author Content Translation Team
 */

namespace ContentTranslation\Scripts;

use ContentTranslation\Service\ContentCompressionService;
use MediaWiki\Maintenance\Maintenance;
use MediaWiki\MediaWikiServices;
use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\IExpression;
use Wikimedia\Rdbms\LikeValue;

// @codeCoverageIgnoreStart
$env = getenv( 'MW_INSTALL_PATH' );
$IP = $env !== false ? $env : __DIR__ . '/../../..';
require_once "$IP/maintenance/Maintenance.php";
// @codeCoverageIgnoreEnd

/**
 * Maintenance script to compress content in the cxc_corpora table.
 */
class CompressCorporaContent extends Maintenance {
	/** @var bool */
	private bool $dryRun = true;

	public function __construct() {
		parent::__construct();

		$this->setBatchSize( 100 );
		$this->requireExtension( 'ContentTranslation' );
		$this->addDescription( 'Compress contents in the cxc_corpora table using ContentCompressionService.' );

		// Default to safe option which doesn't actually change data.
		$this->addOption(
			'really',
			'(optional) Really compress the data instead of a dry-run'
		);

		$this->addOption(
			'start-from',
			'(optional) Start processing from a specific cxc_id',
			false,
			true
		);
	}

	public function execute() {
		$this->dryRun = !$this->hasOption( 'really' );
		$lang = $this->getServiceContainer()->getLanguageFactory()->getLanguage( 'en' );

		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();
		$dbw = $connectionProvider->getPrimaryDatabase();

		$compressionService = new ContentCompressionService();

		$this->output( "Starting compression of cxc_corpora content...\n" );
		if ( $this->dryRun ) {
			$this->output(
				"DRY-RUN mode: no changes will be made unless you use --really\n\n"
			);
		}

		// Only process content that is not already compressed
		// and exclude category metadata
		$compressedPattern = new LikeValue( ContentCompressionService::COMPRESSION_PREFIX, $dbr->anyString() );
		$conditions = [
			$dbr->expr( 'cxc_content', IExpression::NOT_LIKE, $compressedPattern ),
			$dbr->expr( 'cxc_section_id', '!=', 'CX_CATEGORY_METADATA' ),
			$dbr->expr( 'cxc_content', '!=', '' )
		];

		// Process records in batches
		$processed = 0;
		$compressed = 0;
		$totalBytesSaved = 0;
		$lastId = (int)$this->getOption( 'start-from', 0 );

		do {
			$res = $dbr->newSelectQueryBuilder()
				->select( [ 'cxc_id', 'cxc_content' ] )
				->from( 'cx_corpora' )
				->where( $conditions )
				->where( $dbr->expr( 'cxc_id', '>', $lastId ) )
				->orderBy( 'cxc_id' )
				->limit( $this->getBatchSize() )
				->caller( __METHOD__ )
				->fetchResultSet();

			$batchCount = $res->numRows();
			if ( $batchCount === 0 ) {
				break;
			}

			$this->beginTransactionRound( __METHOD__ );
			$this->output( "Processing batch starting at ID " . ( $lastId + 1 ) . "\n" );

			foreach ( $res as $row ) {
				$processed++;
				$lastId = $row->cxc_id;
				$originalSize = strlen( $row->cxc_content );
				$compressedContent = $compressionService->compress( $row->cxc_content );
				$compressedSize = strlen( $compressedContent );

				// Only update if compression actually made the content smaller
				if ( $compressedContent !== $row->cxc_content && $compressedSize < $originalSize ) {
					if ( !$this->dryRun ) {
						$dbw->newUpdateQueryBuilder()
							->update( 'cx_corpora' )
							->set( [ 'cxc_content' => $compressedContent ] )
							->where( [ 'cxc_id' => $row->cxc_id ] )
							->caller( __METHOD__ )
							->execute();
					}

					$compressionRatio = round( ( 1 - $compressedSize / $originalSize ) * 100, 2 );
					$compressed++;
					$totalBytesSaved += $originalSize - $compressedSize;
					$this->output( "[{$row->cxc_id}] Compressed: " .
						"{$originalSize} -> {$compressedSize} bytes ({$compressionRatio}% reduction)\n" );
				} else {
					$this->output( "[{$row->cxc_id}] Skipped: compression does not reduce size\n" );
				}
			}

			$this->commitTransactionRound( __METHOD__ );
			$this->output( "Batch completed. Processed: $processed, Compressed: $compressed records so far\n" );
			$this->output( "Last processed ID: $lastId\n\n" );

		} while ( $batchCount === $this->getBatchSize() );

		$this->output(
			( $this->dryRun ? "[DRY RUN]\n" : '' ) .
			"Completed processing. Processed: $processed, Compressed: $compressed records " .
			"({$lang->formatSize($totalBytesSaved)} saved)\n"
		);
	}
}

// @codeCoverageIgnoreStart
$maintClass = CompressCorporaContent::class;
require_once RUN_MAINTENANCE_IF_MAIN;
// @codeCoverageIgnoreEnd
