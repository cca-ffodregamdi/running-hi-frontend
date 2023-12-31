const path = require("path");

module.exports = {
  entry: "./src/App.js", // 번들링 시작 지점입니다.

  module: {
    rules: [
      {
        test: /\.svg$/, // svg 파일이 존재할 경우,
        use: ["@svgr/webpack", "url-loader"],
        // .SVG 파일을 컴포넌트로 가져와서 사용할 수 있게 되며
        // 태그 요소 src 속성에 url 입력이 가능해집니다.
      },
      {
        test: /\.s[ac]ss$/i, // SCSS 파일이 존재할 경우,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    alias: {
      // 상대 경로를 별칭으로 치환하여 사용할 수 있도록 합니다.
      "@theme": path.resolve(__dirname, "src/Darkmode/theme/theme"),
      "@components": path.resolve(__dirname, "src/components"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
