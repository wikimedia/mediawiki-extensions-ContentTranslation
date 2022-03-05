<?php

namespace ContentTranslation\ActionApi;

use ApiBase;
use Firebase\JWT\JWT;

/**
 * Module that provides JWT tokens to authenticate with cxserver.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
class ApiContentTranslationToken extends ApiBase {
	public function execute() {
		$user = $this->getUser();

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( !$user->isRegistered() ) {
			// XXX: Maybe this should use a different error code. Currently it does not
			// matter, because most likely some other API call will fail first. CX2
			// is also using assert=user, so this case won't be hit.
			$this->dieWithError( 'apierror-mustbeloggedin-generic', 'token-impossible' );
		}

		// Do not fatal out if firebase/php-jwt is missing
		if ( !class_exists( JWT::class ) ) {
			$this->dieWithError( 'apierror-cx-jwtmissing', 'token-impossible' );
		}

		$config = $this->getConfig()->get( 'ContentTranslationCXServerAuth' );
		$algorithm = $config['algorithm'];
		$key = $config['key'];

		if ( $key === '' ) {
			$this->dieWithError( 'apierror-cx-keynotconfigured', 'token-impossible' );
		}

		$age = (int)$config['age'];
		$iat = time();
		$exp = $iat + $age;

		$token = [
			'sub' => $user->getName(),
			'iat' => $iat,
			'exp' => $exp,
		];

		$jwt = JWT::encode( $token, $key, $algorithm );

		$this->getResult()->addValue( null, 'jwt', $jwt );
		// Include some additional information for the client, so it does not need to
		// concern itself with the actual token, but just to pass it forward and to
		// know when to fetch a new one.
		$this->getResult()->addValue( null, 'exp', $exp );
		$this->getResult()->addValue( null, 'age', $age );
	}

	public function needsToken() {
		return 'csrf';
	}

	protected function getExamplesMessages() {
		return [
			'action=cxtoken&token=123ABC' => 'apihelp-cxtoken-example-1'
		];
	}
}
