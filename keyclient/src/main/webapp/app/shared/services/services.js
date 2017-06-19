
var app1 = angular.module('appProductServices', ['ngResource']);

		
	app.factory('factoryProducts', function($q, $timeout, $http) {
	    var Webtest = {
	        fetch: function(callback) {
	            return $timeout(function() {
	                return $http.get('http://localhost:9999/keyrestservices/services/productservices/products').then(function(response) {
	                    return response.data;
	                });
	            }, 30);
	        }
	    };
	    return Webtest;
	});
	
	
		  
	app.factory('sharedOrders', ['$http', '$rootScope', function($http, $rootScope) {
	  var orders = [];
	  return {
	    getOrders: function() {
	      return $http.get('http://localhost:9999/keyrestservices/services/productservices/products').then(function(response) {
	        orders = response.data;
	        $rootScope.$broadcast('handleSharedOrders',orders);
	        return orders;
	      })
	    }
	  };
	}]);
	
	
	// Code to be implemented
	app.factory('ProductCRUDServices', 
		function($resource) {
				return $resource(
				"http://localhost\\:9999/keyrestservices/services/productservices/products/:ProductID",{},
				 {
						getProduct: 	{method: 'GET', 	cache: false, isArray: false},
						updateProduct: 	{method: 'PUT', 	cache: false, isArray: false},
						deleteProduct: 	{method: 'DELETE', 	cache: false, isArray: false}
				});
			});
		
	app.factory('ProductListServices', 
		function($resource) {
				return $resource(
				"http://localhost\\:9999/keyrestservices/services/productservices/products",{},
				 {
					getProducts: 	{method: 'GET', 	cache: false, isArray: true},
					saveProduct: 	{method: 'POST', 	cache: false, isArray: false},
				});
				});
	app.factory('CategoryServices', 
			function($resource) {
					return $resource(
					"http://localhost\\:9999/keyrestservices/services/productservices/categories",{},
					 {
						getCategories: 	{method: 'GET', 	cache: false, isArray: true},
					});
					});
	
	// Login Services Start
	

app.factory('checkCreds', function($cookies) {
	return function() {
		var returnVal = false;
		var LoginCreds = $cookies.LoginCreds;
		if (LoginCreds !== undefined && LoginCreds !== "") {
			returnVal = true;
		}
		return returnVal;
	};
} );
app.factory('getToken',  function($cookies) {
	return function() {
		var returnVal = "";
		var LoginCreds = $cookies.LoginCreds;
		if (LoginCreds !== undefined && LoginCreds !== "") {
			returnVal = btoa(LoginCreds);
		}
		return returnVal;
	};
});
app.factory('getUsername', function($cookies) {
	return function() {
		var returnVal = "";
		var LoginUsername = $cookies.LoginUsername;
		if (LoginUsername !== undefined && LoginUsername !== "") {
			returnVal = LoginUsername;
		}
		return returnVal;
	};
} );
app.factory('setCreds',  function($cookies) {
	return function(un, pw) {
		var token = un.concat(":", pw);
		$cookies.LoginCreds = token;
		$cookies.LoginUsername = un;
	};
} );
app.factory('deleteCreds', function($cookies) {
	return function() {
		$cookies.LoginCreds = "";
		$cookies.LoginUsername = "";
	};
});
	
	
/*app.factory('Login1', function($resource) {
		return
		$resource(
		"http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",
		{}, {
			login: {method: 'POST', cache: false, isArray: false}
		});
	});*/

/*app.factory('Login1', 
		function($resource) {
				return $resource(
				"http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",{},
				 {
					login: {method: 'POST', cache: false, isArray: false}
				});
			});*/

app.factory('Login1', 
		function($resource) {
				return $resource(
				"http://localhost\\:9999/keyrestservices/services/LoginServices/Login",{},
				 {
					login: {method: 'POST', cache: false, isArray: false}
				});
			});




app.controller('LogoutCtrl',
		function LogoutCtrl($location, deleteCreds) {
		deleteCreds();
			$location.path('/login');
		});


app.service('ProductServices', function() {
	var productList = [];
	var categories = [ {
		CategoryName : "Catridge",
		Manufacture : "Cisco",
		Color : "red",
		Size : "28X4"
	}, {
		CategoryName : "Printer",
		Manufacture : "Intel",
		Color : "red",
		Size : "22X4"
	}, {
		CategoryName : "Tuner",
		Manufacture : "IBM",
		Color : "red",
		Size : "21X4"
	}, {
		CategoryName : "Monitor",
		Manufacture : "Satyam",
		Color : "red",
		Size : "24X4"
	}, {
		CategoryName : "Keyboard",
		Manufacture : "TCS",
		Color : "red",
		Size : "23X4"
	}, {
		CategoryName : "Mboard",
		Manufacture : "Wipro",
		Color : "red",
		Size : "23X4"
	} ];
	var addProduct = function(newObj) {
		productList.push(newObj);
	};

	var getProducts = function() {
		return productList;
	};

	var getCategories = function() {
		return categories;
	};

	return {
		addProduct : addProduct,
		getProducts : getProducts,
		getCategories : getCategories
	};

});
	


