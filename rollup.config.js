import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'index.js',
  plugins: [resolve(), babel()],
  output: [
    { file: 'dist/index.esm.js', format: 'es', exports: 'named', sourcemap: true}
  ]
}

export default config
