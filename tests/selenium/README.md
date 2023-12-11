# Selenium tests

For more information see https://www.mediawiki.org/wiki/Selenium

## Prerequisites
1. Node v16 (v18 is not supported)
2. Webdriver v7 (v8 is not supported. See: https://phabricator.wikimedia.org/T324766)

## Setup

See https://www.mediawiki.org/wiki/User:Santhosh.thottingal/WikiFamily to setup a wiki family with CX / SX

### Environment setup

Copy the `.env.sample` file present inside the `tests/selenium` and create a `.env` file. Update the values in the file as needed.

## Run all specs

    npm run wdio

## Run specific tests

Filter by file name:

    npm run wdio -- --spec tests/selenium/specs/[FILE-NAME]

Filter by file name and test name:

    npm run wdio -- --spec tests/selenium/specs/[FILE-NAME] --mochaOpts.grep [TEST-NAME]
