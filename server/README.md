ContentTranslation is a tool that allows editors to translate pages from
one language to another with the help of machine translation and other translation aids.

This is the server component of ContentTranslation.

Installation
------------

Install the depdendencies

```$ npm install```

You need redis server running on your machine. Install redis-server using
your OS package manager. Example:

```apt-get install redis-server```

Running the server
------------------

To run the server:

```$ npm start```

Then browse to http://localhost:8000/. You'll see the Server
playground page.

Configuration
-------------

An example configuration file is given as config.example.js.
Rename that file to config.js and make your changes. Then
restart the server.

