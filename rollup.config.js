import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/ts/index.ts',
  output: [
    {
      file: 'dist/js/string-pixelater.js',
      format: 'umd',
      name: 'StringPixelater',
    },
  ],
  plugins: [
    typescript(),
  ]
}
