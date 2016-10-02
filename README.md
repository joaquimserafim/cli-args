# cli-args

<a href="https://nodei.co/npm/cli-args/"><img src="https://nodei.co/npm/cli-args.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/cli-args.png?branch=master)](https://travis-ci.org/joaquimserafim/cli-args)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/eventloop-info/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/cli-args/blob/master/package.json#L14)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


####summary
small command line parser 


#### require

	var args = require('cli-args')
			
			
#### examples

```js
var args = require('cli-args')(process.argv.slice(2));
console.dir(args);
	


$ node ex1.js -a hello -b world -c 2014.5 --hello
{ _: ['hello'], a: 'hello', b: 'world', c: 2014.5 }


	
$ node ex2.js --date="2014-05-23T12:00:00" --port=80 --clean=false foo --exit
{ 
	_: ['foo', 'exit'],
	date: Thu May 23 2014 12:00:02 GMT+0100 (WEST),
	port: 80,
	clean: false
}
```

