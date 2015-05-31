import { throws, equal } from 'assert';
import { readFileSync } from 'fs';
import { join } from 'path';
import moduleIndexer from '../index';

test('#moduleIndexer', (done) => {
	throws(() => moduleIndexer(null, 'nirvana', () => {}));

	moduleIndexer(__dirname, ( err ) => {
		equal(err, null);
		equal(readFileSync(join(__dirname, 'module', 'index.js'), { encoding: 'utf8' }),
				readFileSync(join(__dirname, 'fixture', 'expected.js'), { encoding: 'utf8' }));
		done();
	})

});
