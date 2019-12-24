import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const input = 'src/index.ts';

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'ag-grid-react': 'AgGridReact',
  'ag-grid-community': 'AgGridCommunity'
};

const typescriptOptions = {
  tsconfigOverride: {
    compilerOptions: {
      module: 'es2015',
      declaration: false,
    }
  }
};

const sizeSnapshotOptions = {
  snapshotPath: 'dist/geneeui.min.js.size-snapshot.json'
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/
};

export default [
  {
    input,
    external: Object.keys(globals),
    output: {
      file: 'dist/geneeui.js',
      format: 'umd',
      name: 'GeneeUI',
      globals,
    },
    plugins: [
      nodeResolve(),
      typescript(typescriptOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ]
  },
  {
    input,
    external: Object.keys(globals),
    output: {
      file: 'dist/geneeui.min.js',
      format: 'umd',
      name: 'geneeu',
      globals,
    },
    plugins: [
      nodeResolve(),
      typescript(typescriptOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(sizeSnapshotOptions),
      terser(),
    ]
  }
];
