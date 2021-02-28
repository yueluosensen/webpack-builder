const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  console.log(baseConfig);

  it ('enrty', () => {
    assert.deepStrictEqual(baseConfig.entry.index, 'F:/js/review/webpack/webpack_tencent/webpack-design/test/smoke/template/src/pages/index/index.js');
    assert.deepStrictEqual(baseConfig.entry.search, 'F:/js/review/webpack/webpack_tencent/webpack-design/test/smoke/template/src/pages/search/index.js');
  });
});