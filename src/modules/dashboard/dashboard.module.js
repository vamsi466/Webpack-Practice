var dashboardController = require('./dashboard.controller.js');
var dashboardService = require('./dashboard.service.js');

// require('./dashboard.tpl.html');

module.exports = angular
					.module('inSNM941.dashboard',[])
					.controller('dashboardCtrl',['dashboardService',dashboardController])
					.service('dashboardService',['$http',dashboardService])


