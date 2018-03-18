const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
./src/index.js파일이 너가 일을 시작할 곳이야. 여기에서 필요하다고 하는 것들부터 찾아보렴.
결과물은 너가 있는 디렉토리(__dirname)에 있는 'dist'라는 폴더 아래에, 'carousel.min.js'라는 이름으로 떨궈줘.
*/
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tada.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Tada',
    libraryTarget: 'umd'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      { //각 loader에서 사용할 설정들을 세세하게 지정할 수 있어요.
        test: /\.js$/, //webpack이 '.js'파일을 찾으면 이 로더를 타게 됩니다.
        exclude: /node_modules/, //하지만 node_modules 안에 있는거라면 스킵해달라고도 정해주고,
        loader: 'babel-loader', //이러한 설정으로 사용할 loader는 'babel loader'입니다.
        options: {
          presets: ['es2015'],
          plugins: ['transform-class-properties']

        }
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
  ]
};
