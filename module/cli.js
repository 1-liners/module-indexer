#!/usr/bin/env node

var meow = require('meow');
var moduleIndexer = require('./');

var cli = meow({
    help: [
        'Usage',
        '  module-indexer <dir>'
    ].join('\n')
});

moduleIndexer(cli.input[0], (err, modules) => {
	if (err) console.error(err);
	else console.log(`index.js created in ${cli.input[0]}/module`);
});
