require('../node_modules/ng-table/bundles/ng-table.min.css');
require('../node_modules/jquery/src/jquery.js');
require('../node_modules/angular/angular.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.js');
require('../node_modules/ng-table/bundles/ng-table.min.js');
require('../node_modules/bootstrap/js/modal.js');
require('../node_modules/bootstrap/js/dropdown.js');
require('../node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css')
require('./modules/dashboard/dashboard.module.js')
require('./modules/daignostics/daignostics.module.js')
require('./modules/network-configuration/network-configuration.module.js')

require('./css/app.sass')
require('./css/trimble.css')
require('./css/trimble.2.css')



module.exports = angular
	.module('SNM941',['ui.router','inSNM941.dashboard','inSNM941.daignostics','inSNM941.network_configuration'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
		$stateProvider
		  .state('dashboard', {
		    url:'/',
		    templateUrl: './src/modules/dashboard/dashboard.tpl.html',
		    controller: 'dashboardCtrl',
		    controllerAs: 'dc' 
		  })

		  .state('networkconfig', {
		    url:'/network-configuration',
		    templateUrl: './src/modules/network-configuration/templates/network-configuration.tpl.html',
		    controller:'networkConfigurationCtrl',
			controllerAs:"nc"
		  })

		  .state('telematic', {
	          url:'/telematic',
	          templateUrl: './src/modules/telematic/telematic.tpl.html'
	      })
		  .state('rebroadcast', {
		    url:'/rtk-rebroadcast',
		    templateUrl: './src/modules/rebroadcast/rebroadcast.tpl.html'
		  })

		  .state('daignostics', {
	          url:'/daignostics',
	          templateUrl: './src/modules/daignostics/view/daignostics.home.tpl.html'
	      })
	   
		  .state('settings', {
	          url:'/settings',
	          templateUrl: './src/modules/settings/settings.tpl.html'
	      })
	}])
	.controller('mainCtrl', function(){
		this.sidebarToggle = {
					left: false,
				}
	})

