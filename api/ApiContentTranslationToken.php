<?php

use Firebase\JWT\JWT;

/**
 * Module that provides JWT tokens to authenticate with cxserver.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
class ApiContentTranslationToken extends ApiBase {
	public function execute() {
		$user = $this->getUser();

		if ( $user->isBlocked() ) {
			$this->dieUsageMsg( 'blockedtext' );
		}

		if ( !$user->isLoggedIn() ) {
			$this->dieUsage( 'Must be logged in', 'token-impossible' );
		}

		// Do not fatal out
		if ( !class_exists( 'Firebase\JWT\JWT' ) ) {
			$this->dieUsage( 'JWT missing', 'token-impossible' );
		}

		$config = $this->getConfig()->get( 'ContentTranslationCXServerAuth' );
		$algorithm = $config['algorithm'];
		$key = $config['key'];

		if ( $key === '' ) {
			$this->dieUsage( 'Key not configured', 'token-impossible' );
		}

		$exp = time() + $config['age'];

		$token = array(
			'sub' => $user->getName(),
			'iat' => time(),
			'exp' => $exp,
		);

		$jwt = JWT::encode( $token, $key, $algorithm );

		$this->getResult()->addValue( null, 'jwt', $jwt );
		$this->getResult()->addValue( null, 'exp', $exp );
	}

	public function needsToken() {
		return 'csrf';
	}

	protected function getExamplesMessages() {
		return array(
			'action=cxtoken&token=123ABC' => 'apihelp-cxtoken-example-1'
		);
	}
}
