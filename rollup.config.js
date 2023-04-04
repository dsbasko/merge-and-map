import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const INPUT_ENTRY = 'src/main.ts';

export default [
	// ES
	{
		input: INPUT_ENTRY,
		output: {
			file: 'build/index.js',
			format: 'es',
		},
		plugins: [
			typescript(),
			babel({
				extensions: ['.ts'],
				exclude: 'node_modules/**',
				babelHelpers: 'bundled',
			}),
			terser(),
		],
	},

	// UMD
	{
		input: INPUT_ENTRY,
		output: {
			file: 'build/index.cjs',
			format: 'umd',
			name: 'reactUseThrottle',
			indent: false,
		},
		plugins: [
			typescript(),
			babel({
				extensions: ['.ts'],
				exclude: 'node_modules/**',
				babelHelpers: 'bundled',
			}),
			terser(),
		],
	},

	// Types
	{
		input: INPUT_ENTRY,
		output: [
			{
				file: 'build/index.d.ts',
				format: 'es',
			},
		],
		plugins: [
			dts(),
		],
	},
];
