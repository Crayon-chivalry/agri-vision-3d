module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: ({ file }) => {
        // 根据文件路径判断平台
        if (file?.includes('/mobile/')) {
          return 37.5 // H5基准值(375设计稿)
        } else {
          return 1920 / 24 // PC基准值(1440/24=60)
        }
      },
      unitPrecision: 5,					// 转换后的精度，默认是 5
      propList: ['*'],					// 要转换的属性列表，'*' 表示所有属性
      exclude: /node_modules/i,	// 是否排除某些文件夹中的样式进行转换，默认不排除
      selectorBlackList: [],		// 选择器黑名单，匹配到这些选择器的样式不转换
      replace: true,						// 是否直接替换原始的 px
      mediaQuery: false,				// 是否转换媒体查询中的 px
      minPixelValue: 1,					// 小于或等于此值的 px 单位不会被转换
    },
  },
};