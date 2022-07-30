//生产模式配置

const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');//引入Eslint插件
const HtmlWebpackPlugin = require('html-webpack-plugin');//引入HTML打包文件引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //引入css样式处理
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");//引入css压缩插件
module.exports ={
  //入口:文件从那个位置开始打包
  entry:'./src/main.js', //此处为相对路径

  //输出：文件打包完成后输出到那个位置
  output:{
    //所有文件的输出路径
    path:path.resolve(__dirname,'../dist'), //此处为绝对路径
    filename:'static/js/main.js',  //入口文件的打包文件名及文件位置
    clean:true,      //每次打包清空上次打包内容(若配置了服务器，则不能输出打包文件，此配置项可以不写)
  },

  //加载器
  module:{
    rules:[{
      test:/.s?.css$/, //正则表达式，监测以.css结尾的文件
      use:[    //use中内容从右向左执行
        MiniCssExtractPlugin.loader, 
        'css-loader',
        {    //该对象是来处理css兼容性问题的
          loader:"postcss-loader",
          options:{
            postcssOptions:{
              plugins:[
                "postcss-preset-env",//能解决大多样式兼容问题
              ]
            }
          }
        }   //将css资源编译成commonjs模块放入js中
      ]
    },{
      test:/\.less$/, ///处理.less结尾的文件
      use:[{
        loader:MiniCssExtractPlugin.loader
      },{
        loader:"css-loader"
      },{
        loader:"less-loader"
      }]
    },
      {      //处理较小图片，将图片转化为base64 
             //图片转换为字符串，减少了对服务器的请求，但图片体积会稍微增大
      test:/\.(png|jpe?g|gif|webp|svg)$/,
      type:"asset",
      parser:{
        dataUrlCondition:{
          maxsize: 10 * 1024 ,
        },
      },
      generator:{
        //输出图片名字
        //[hash:10]hash只取其前十位
        filename:'static/images/[hash:10][ext][query]', //将图片打包后存入到图片对应的文件中
      }
    },{  //处理 以 font class 引入的字体图标以及MP3，MP4及其他资源
        // 如有其他未考虑到的资源只需在test中写入资源文件后缀，webpack便会识别，并原封不动输出
      test:/\.(ttf|woff2?|mp3|mp4|avi)$/,
      type:"asset/resource",
      generator:{
        //输出名字
        filename:"static/media/[hash:10][ext][query]",
      },
    },{
       test: /\.js$/,
      exclude: /(node_modules|bower_components)/,//排除node_modules和bower_components文件不处理
      use: {
        loader: 'babel-loader',
        // options: {            
        //   presets: ['@babel/preset-env']    //也可将此配置放在.babelrc.js等babel配置文件之下
        // }
      }
    }]//loader的配置
  },
optimization:{
  minimizer:[
    new CssMinimizerPlugin(),
  ],
},
  //插件
  plugins:[
    //eslint配置
    new ESLintPlugin({           //eslint是做语法监测的
      context : path.resolve(__dirname,'../src') //是监测src文件下的代码语法
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../public/index.html'), 
      //以该路径下的html文件为模板创建新的html文件，新创建的文件结构和源文件一致，并且引入打包删除的资源
    }),
    new MiniCssExtractPlugin({
      filename:"static/css/main.css",
    }),
      // new CssMinimizerPlugin(),//在这里也可以new文件压缩
  ], //plugins的配置
  //模式
  mode:'production'
}