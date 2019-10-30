import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

// Reference: https://github.com/rollup/rollup-starter-lib/tree/babel

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'StorageWrap',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: ['node_modules/**']
            }),
            terser()
		]
	},
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		]
	}
];
