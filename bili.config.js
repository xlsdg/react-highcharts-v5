'use strict';

module.exports = {
  input: ['src/HighCharts.js', 'src/HighMaps.js', 'src/HighStock.js'],
  outDir: 'dist',
  // config: '',
  format: ['cjs', 'umd', 'umd-min', 'es'],
  // moduleName: 'HighCharts',
  global: {
    'react': 'React',
    'highcharts': 'HighCharts',
    'highcharts/highmaps': 'HighCharts',
    'highcharts/highstock': 'HighCharts'
  },
  filename: '[name][suffix].js',
  // name: 'highcharts',
  // inline: false,
  // cwd: '',
  // external: [
  //   'react',
  //   'highcharts'
  // ],
  banner: false,
  postcss: {
    modules: true
  },
  js: 'babel',
  // plugin: ['vue'],
  target: 'browser',
  jsx: 'react',
  // objectAssign: undefined,
  // exports: 'auto',
  // replace: {},
  // alias: {},
  pretty: true
  // env: {},
  // virtualModules: {},
  // sizeLimit: {},
  // extendOptions: {},
};
