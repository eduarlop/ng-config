'use strict';

var extend = require('extend');
var microtemplates = require('microtemplates');

var defaults = {
  module: 'config',
  template: '\'use strict\';\n\nangular.module(\'<%= module %>\')\n<% Object.keys(constants).forEach(function(key) { %>.constant(\'<%= key %>\', <%= JSON.stringify(constants[key]) %>)<% }); %>;',
  constants: {}
};

module.exports = function(options) {
  options = extend(defaults, options);
  return microtemplates(options.template)(options);
};
