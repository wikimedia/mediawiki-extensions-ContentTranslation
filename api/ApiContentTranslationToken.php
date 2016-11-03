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
			$this->dieBlocked( $user->getBlock() );
		}

		if ( !$user->isLoggedIn() ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-mustbeloggedin-generic', 'token-impossible' );
			} else {
				$this->dieUsage( 'Must be logged in', 'token-impossible' );
			}
		}

		// Do not fatal out
		if ( !class_exists( 'Firebase\JWT\JWT' ) ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-jwtmissing', 'token-impossible' );
			} else {
				$this->dieUsage( 'JWT missing', 'token-impossible' );
			}
		}

		$config = $this->getConfig()->get( 'ContentTranslationCXServerAuth' );
		$algorithm = $config['algorithm'];
		$key = $config['key'];

		if ( $key === '' ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-keynotconfigured', 'token-impossible' );
			} else {
				$this->dieUsage( 'Key not configured', 'token-impossible' );
			}
		}

		$exp = time() + $config['age'];

		$token = [
			'sub' => $user->getName(),
			'iat' => time(),
			'exp' => $exp,
		];

		$jwt = JWT::encode( $token, $key, $algorithm );

		$this->getResult()->addValue( null, 'jwt', $jwt );
		$this->getResult()->addValue( null, 'exp', $exp );
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
