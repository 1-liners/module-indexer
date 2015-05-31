[![Coverage Status](https://coveralls.io/repos/1-liners/module-indexer/badge.svg?branch=master)](https://coveralls.io/r/1-liners/module-indexer?branch=master)
[![Build Status](https://travis-ci.org/1-liners/module-indexer.svg?branch=master)](https://travis-ci.org/1-liners/module-indexer)
[![Dependency Status](https://david-dm.org/1-liners/module-indexer.svg)](https://david-dm.org/1-liners/module-indexer)
[![npm version](https://badge.fury.io/js/module-indexer.svg)](http://badge.fury.io/js/module-indexer)

module-indexer
====

> creates a `index.js` for es6 modules

## Usage

### Install

```
$ npm install --save module-indexer
```

### Usage

```js
import moduleIndexer from 'module-indexer';

moduleIndexer(__dirname, (err) => err? console.error('Doh!') : console.log('Created'));
```

### CLI

```bash
module-indexer ./
```

## Maintainers

|  [![stoeffel](https://avatars.githubusercontent.com/u/1217681?v=3&s=80)](https://github.com/stoeffel) | [![hemanth](https://avatars.githubusercontent.com/u/18315?v=3&s=80)](https://github.com/hemanth) | [![tomekwi](https://avatars.githubusercontent.com/u/4624660?v=3&s=80)](https://github.com/tomekwi)  |
| :--:|:--:|:--: |
|  [stoeffel](https://github.com/stoeffel) | [hemanth](https://github.com/hemanth) | [tomekwi](https://github.com/tomekwi)  |

created with [gh-contributors-table](https://github.com/stoeffel/gh-contributors-table)


## License

MIT © [stoeffel](http://schtoeffel.ch) [tomekwi](http://github.com/tomekwi) [hemanth](http://www.h3manth.com/)
