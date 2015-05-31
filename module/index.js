import getModules from 'get-modules';
import { writeFile } from 'fs';
import path from 'path';
import curry from 'chickencurry';
import map from '1-liners/map';
import join from '1-liners/join';
import compose from '1-liners/compose';
import reduce from '1-liners/reduce';
import filter from '1-liners/filter';

const mapλ = curry(map);
const joinλ = curry(join);
const filterλ = curry(filter);

const removeExt = mapλ(module => module.replace('.js', ''));
const filterIndex = filterλ(module => module !== 'index.js');

const createImports = reduce(compose, [
	joinλ('\n'),
	mapλ(module => `import ${module} from './${module}';`),
	removeExt,
	filterIndex
]);

const createExport = reduce(compose, [
	joinλ(',\n  '),
	removeExt,
	filterIndex
]);

export default function( root, callback ) {
	return getModules(root, (err, modules) => {
		if (err) throw err;
		let imports = createImports(modules);
		let exportDefault = `export {\n  ${createExport(modules)}\n};`;
		writeFile(path.join(root, 'module', 'index.js'), `${imports}\n\n${exportDefault}`, callback);
	});
}
