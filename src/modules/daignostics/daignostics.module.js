require('./view/ping.tpl.html');
require('./view/network-interface.tpl.html');
require('./view/scantool.tpl.html');

require('./scantools.json');

var scantoolCtrl = require("./scantoolCtrl.js");

module.exports = angular
					.module('inSNM941.daignostics', ['ui.router','ngTable'])
					.controller('scantoolCtrl',['$http','NgTableParams',scantoolCtrl])
					.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

						$urlRouterProvider.when('/daignostics','/daignostics/ping');

						$stateProvider
							.state('daignostics.ping', {
								url:'/ping',
								templateUrl: 'ping.tpl.html'
							})

							.state('daignostics.networkinterface', {
								url:'/network-interface',
								templateUrl: 'network-interface.tpl.html'
							})

							.state('daignostics.scantool', {
								url:'/scan-tool',
								templateUrl: 'scantool.tpl.html'
							});
					}]);
  