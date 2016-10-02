[![Build Status](https://travis-ci.org/eladelrom/woodenlog.svg?branch=master)](https://travis-ci.org/eladelrom/woodenlog.svg?branch=master)

WoodenLog
=========

Minimalist log node messages module to add colors for console.log for specific type of log.

## Installation

```shell
  npm install woodenlog --save
```

## Usage

```js
var woodenlog = require('woodenlog');
// woodenlog.configurate(null, 'white', 'green', 'red');

woodenlog.log('just log!');
woodenlog.warn('this is a warning!');
woodenlog.error('this is an error!');

```

## Tests

```shell
   npm test
```

## Release History

* 1.0.0 Initial release
