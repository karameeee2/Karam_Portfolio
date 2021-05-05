/* plugins */
const HTMLWebPackPlugin = require('html-webpack-plugin');

/* other */
const path = require('path');

/* constants */
const outputDirectory = 'dist';

module.exports = {
    // 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번들파일을 만들어 내게 된다.
    /* 아래의 코드는 이 코드의 축약본.. 그래서 번들링 결과물이 default로 main. 으로 시작하게됨.
    entry: { 
        main: './path/to/my/entry/file.js' 
    }
    */
    entry: './src/index.js', // 다른모듈을 사용하고 있는 최상위 자바스크립트 파일을 적어준다.

    // 결과물이 어떻게 나올지 설정한다.
    output: {
        path: path.resolve(__dirname, outputDirectory), // output으로 나올 파일이 저장될 경로
        publicPath: '/', // prefix 개념. 배포 시 파일들이 참조할 URL 경로
        filename: '[name].js', // entry 에서 지정한 [alias] 대로 결과물이 나온다.
    },

    mode: 'production',

    // loaders (파일을 해석하고 변환하는 과정에 관여)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"    
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     name: 'images/[name].[ext]?[hash]',
                        // }
                    },
                ],
            },
        ]
    },

    // 모듈을 어떻게 로드해 오는지 설정
    resolve: {
        modules: ['node_modules'], // 설치된 라이브러리를 가져올 때 검색기준이 될 경로
        extensions: ['.js', '.json', '.jsx', '.css'], // 모듈을 가져올 때 웹팩이 확장자를 처리해줌
    },

    // 부가 플러그인들 (결과물의 형태에 관여)
    plugins: [
        new HTMLWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],

    optimization: {
        minimize: true
    }
}