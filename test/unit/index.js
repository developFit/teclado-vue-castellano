// require all test files (files that ends with .spec.js)
var testsContext = require.context("./specs", true, /\.spec$/);
testsContext.keys().forEach(testsContext);


// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
var srcContext = require.context("src", true, /\.(js|vue)$/);
srcContext.keys().forEach(srcContext);

require("./style.scss");