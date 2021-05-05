const fs = require("fs").promises;
const postcss = require("postcss");
const autoprefixcer = require('autoprefixer');
// const postcssEasyImport = require("postcss-easy-import");
// const cssnano = require("cssnano")({
//   preset: "default",
// });

module.exports = function plugin() {
  return {
    name: "plugin-css-export-string",
    resolve: {
      input: [".css"],
      output: [".js"],
    },
    load: async ({ filePath }) => {
      const input = await fs.readFile(filePath, { encoding: "utf-8" });
      const result = await postcss([autoprefixcer]).process(
        input,
        {
          from: filePath,
          to: filePath,
          map: { inline: true },
        }
      ).css.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

      return {
        ".js": { code: [
            "import { css } from 'lit';",
            'export default css`' + result + '`;'
          ].join('\n'),
        },
      }
    },
  };
};



