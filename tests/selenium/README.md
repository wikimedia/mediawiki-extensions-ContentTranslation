# Selenium tests

For more information see https://www.mediawiki.org/wiki/Selenium

## Prerequisites
1. Node v16 (v18 is not supported)
2. Webdriver v7 (v8 is not supported. See: https://phabricator.wikimedia.org/T324766)

## Setup

See https://www.mediawiki.org/wiki/User:Santhosh.thottingal/WikiFamily to setup a wiki family with CX / SX

### Environment setup

As per: https://www.mediawiki.org/wiki/Selenium/How-to/Set_environment_variables#Target_Cli/docker setup the environment
variables:
```
export MW_SERVER=http://fr.mediawiki.mwdd.localhost:8080
export MW_SCRIPT_PATH=/w
export MEDIAWIKI_USER=admin
export MEDIAWIKI_PASSWORD=mwddpassword
```

Add ContentTranslation-specific environment variables:
```
export CX_REMOTE_API_URL_TEMPLATE=http://{domain}.wikipedia.org/w/api.php
```

## Run all specs

    npm run selenium-test

## Run specific tests

Filter by file name:

    npm run selenium-test -- --spec tests/selenium/specs/[FILE-NAME]

Filter by file name and test name:

    npm run selenium-test -- --spec tests/selenium/specs/[FILE-NAME] --mochaOpts.grep [TEST-NAME]
