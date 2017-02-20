var networkConfigurationCtrl = require('./network-configuration.controller.js');
require('./templates/add-wifi-connection-dialog.tpl.html');
require('./templates/delete-dialog.tpl.html');


module.exports = angular
					.module('inSNM941.network_configuration',['ngTable'])
					.controller('networkConfigurationCtrl', ['$http', 'NgTableParams',networkConfigurationCtrl])

