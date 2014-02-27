ContentTranslation is a tool that allows editors to translate pages from
one language to another with the help of machine translation and other translation tools.

This is the server component of ContentTranslation.

Installation
------------

Install the dependencies:

```$ npm install```

You need a Redis server on your machine.
Install it using your OS package manager:

Debian: ```apt-get install redis-server```
Fedora: ```yum install redis```

Running the server
------------------

First, make sure that the Redis server is running:

Debian: ```service redis-server start```
Fedora: ```service redis start```

To run the ContentTranslation server:

```$ npm start```

Then browse to http://localhost:8000/. You'll see the Server
playground page.

Configuration
-------------

An example configuration file is given as config.example.js.
Rename that file to config.js and make your changes.
Then restart the server.

Debugging
---------
To run the ContentTranslation server:

```$ npm run-script debug```

It will open chrome developer tools with the ContentTranslation source code.
You can debug the code just like a web application. You can also edit the code
and save from the debugger.
