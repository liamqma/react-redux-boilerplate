module.exports = {
  presets: ['es2015-node', 'react'],
  plugins: [["css-modules-transform", { "generateScopedName": "[path]---[name]---[local]---[hash:base64:5]" }]]
};
