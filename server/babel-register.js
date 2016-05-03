const query = require('../webpack/server-babel-config');

require('babel-register')(query);
require('./index');
