ifndef MW_INSTALL_PATH
	MW_INSTALL_PATH=../../../..
endif

default:
	php ${MW_INSTALL_PATH}/tests/phpunit/phpunit.php .

.PHONY: *Test.php
*Test.php:
	php ${MW_INSTALL_PATH}/tests/phpunit/phpunit.php $@
