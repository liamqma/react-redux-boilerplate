require('babel-register')({"presets": ["es2015-node", "react"], "plugins": [["css-modules-transform", {"generateScopedName": "[path]---[name]---[local]---[hash:base64:5]"}]]});
require('./index');
