require('./data.jsons/connection.json');
require('./data.jsons/networkType.json');
require('./data.jsons/portForwarding.json');
require('./data.jsons/serviceNetwork.json');



 module.exports = function($http, ngTableParams) {
                    var self = this;

                    self.connection = new ngTableParams({}, {
                        counts: [],

                        getData: function() {
                            return $http.get('data/connection.json').
                            then(function(response) {
                                return response.data.connection;
                            })
                        }
                    })

                    self.network = new ngTableParams({}, {
                        counts: [],

                        getData: function() {
                            return $http.get('data/networkType.json').
                            then(function(response) {
                                return response.data.networkType;
                            })
                        }
                    })

                    self.portForward = new ngTableParams({}, {
                        counts: [],

                        getData: function() {
                            return $http.get('data/portForwarding.json').
                            then(function(response) {
                                return response.data.portForwarding;
                            })
                        }
                    })

                    self.serviceNetwork = new ngTableParams({}, {
                        counts: [],

                        getData: function() {
                            return $http.get('data/serviceNetwork.json').
                            then(function(response) {
                                return response.data.serviceNetwork;
                            })
                        }
                    })

                    return self;
                }

