//var path = "app/components/products/"
app.config(function($routeProvider) {
      $routeProvider

      .when('/', {
          templateUrl : getProjectPath() +"/app/home.html"
          //controller  : 'LoginCtrl'
        })
     

       .when('/login', {
    	templateUrl: 'app/components/login/views/login.html',
    	controller: 'LoginCtrl'
      })
      
      .when('/logOut', {
    	templateUrl: 'app/components/login/views/login.html',
    	controller: 'LogoutCtrl'
    	})
        
      .when('/Products', {
        templateUrl : "app/components/products/views/products.html",
        controller  : 'ProductsControllers'
      })
      
      
        .when('/Categories', {
        templateUrl : "app/components/products/views/categories.html",
        controller  : 'categoriescontroller'
      })
      
       .when('/customer', {
        templateUrl : getProjectPath() +"/customer.html",
        controller  : 'CustomerController'
      })
       .when('/employee', {
        templateUrl : getProjectPath() +"/html/employees.html",
        controller  : 'ProductsControllers'
      })
 		.when('/localstorage', {
        templateUrl : getProjectPath() +"/localstorage.html",
        controller  : 'LocalStorage'
      })
      .when('/ngtable', {
        templateUrl : getProjectPath() +"/ngtable.html",
        controller  : 'LocalStorage'
      })
      .when('/home', {
    	  templateUrl : getProjectPath() +"/html/home.html",
          controller  : 'HomeController'
      })
      
   
    });
    