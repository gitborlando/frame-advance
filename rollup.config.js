import typescript from 'rollup-plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  input: 'src/frame.ts',
  output: {
    file: 'frame.umd.js',
    name: 'Frame',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    sourceMaps(),
    nodeResolve(),
    commonjs()
  ]
}