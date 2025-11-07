const LicensePlugin = require('webpack-license-plugin')

module.exports = [{
    entry: './src/index.js',
    output: {
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    mode: "development",
    devtool: "eval-cheap-source-map",
}, {
    entry: './src/index.js',
    output: {
        filename: "main.min.js",
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    mode: "production",
    optimization: {
      // Disable minimization entirely
      minimize: false,

      // Ensure named modules and chunks are used for better readability in the bundle (optional, often default in 'development')
      // namedModules: true,
      // namedChunks: true,
    },
    module: {
      rules: [
        {
          test: /\/libs\/(basis|draco)\//,
          type: 'asset/inline'
        }
      ]
    },
    plugins: [
      new LicensePlugin({
        outputFilename: "main.min.js.THIRD_PARTY_LICENSES.json",
        licenseOverrides: {
          'wwobjloader2@6.2.1': 'MIT',
        }
      })
    ],
}];
