# react-highcharts-v5

> React.js(v16.x+) component wrap for HighCharts.js(v6.x+)

## Installation

```bash
$ npm install --save highcharts react-highcharts-v5
```

## Usage

0. Change webpack config

    For webpack 1.x:

    ```diff
          {
            test: /\.jsx?$/,
            loader: 'babel',
            include: [
    -          path.join(prjRoot, 'src')
    +          path.join(prjRoot, 'src'),
    +          path.join(prjRoot, 'node_modules/react-highcharts-v5/src')
            ],
    -        exclude: /node_modules/
    +        exclude: /node_modules(?![\\/]react-highcharts-v5[\\/]src[\\/])/
          },
    ```

    For webpack 2.x+:

    ```diff
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
    -       include: [resolve('src'), resolve('test')]
    +       include: [resolve('src'), resolve('test'), resolve('node_modules/react-highcharts-v5/src')]
          }
    ```

1. Import HighCharts

    ```javascript
    import IHighCharts from 'react-highcharts-v5/src/HighCharts.js';

    export default () => {
      const options = {};

      return (
        <IHighCharts
          options={options}
        />
      );
    };
    ```

2. Import HighMaps

    ```javascript
    import IHighCharts from 'react-highcharts-v5/src/HighMaps.js';

    export default () => {
      const options = {};

      return (
        <IHighCharts
          options={options}
        />
      );
    };
    ```

3. Import HighStock

    ```javascript
    import IHighCharts from 'react-highcharts-v5/src/HighStock.js';

    export default () => {
      const options = {};

      return (
        <IHighCharts
          options={options}
        />
      );
    };
    ```

## propTypes

```javascript
className: PropTypes.string,
style: PropTypes.object,
loading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
]),
theme: PropTypes.object,
resizable: PropTypes.bool,
options: PropTypes.object.isRequired,
onLoad: PropTypes.func,
onResize: PropTypes.func
```

## defaultProps

```javascript
className: 'react-highcharts',
style: {
    width: '100%',
    height: '100%'
},
loading: false,
theme: null,
resizable: false,
onLoad: () => {},
onResize: (w, h) => {}
```

## Demo

[react-highcharts-v5-demo](https://github.com/xlsdg/react-highcharts-v5-demo)

# License

MIT
