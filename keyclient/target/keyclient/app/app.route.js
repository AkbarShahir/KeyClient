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
        templateUrl : "app/components/requisites/products/views/products.html",
        controller  : 'ProductsControllers'
      })
      
      
        .when('/Categories', {
        templateUrl : "app/components/requisites/categories/views/categories.html",
        controller  : 'categoriescontrollers'
       
      })
      
       .when('/Customers', {
        templateUrl : "app/components/requisites/customers/views/customers.html",
        controller  : 'customerscontrollers'
      })
       .when('/Employees', {
        templateUrl : "app/components/requisites/employees/views/employees.html",
        controller  : 'employeescontrollers'
      })
      
      .when('/Salespeople', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Suppliers', {
        templateUrl : "app/components/requisites/suppliers/views/suppliers.html",
        controller  : 'suppliers'
      })
      
      
       .when('/Acknowledgementletters', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Balancesheetcodes', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
       .when('/Cities', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
       .when('/Countries', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Currencies', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/JVDescription', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Locations', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Manufacturers', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Models', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/Profitlosscodes', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       .when('/RefNo', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      .when('/Religions', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Subcategories', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Titles', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Units', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Visastatus', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      .when('/Deliverynote', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Invoice', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Payment', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Purchaseorders', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Receipts', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Salseorders', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Accounts', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Payments', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Reciepts', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Stock', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Groups', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
      .when('/Permissions', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
       
      .when('/Profile', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
       
      .when('/Users', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
      })
      
      
       
      .when('/Permissions', {
        templateUrl : "app/components/requisites/salespeople/views/salespeople.html",
        controller  : 'salespeoplecontrollers'
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
    