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
        controller  : 'productscontrollers'
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
        templateUrl : "app/components/requisites/others/acknowledgementletters/views/acknowledgementletters.html",
        controller  : 'acknowledgementletterscontrollers'
      })
      
       .when('/Balancesheetcodes', {
        templateUrl : "app/components/requisites/others/balancesheetcodes/views/balancesheetcodes.html",
        controller  : 'balancesheetcodescontrollers'
      })
      
      
       .when('/Cities', {
        templateUrl : "app/components/requisites/others/cities/views/cities.html",
        controller  : 'citiescontrollers'
      })
      
      
       .when('/Countries', {
        templateUrl : "app/components/requisites/others/countries/views/countries.html",
        controller  : 'countriescontrollers'
      })
      
       .when('/Currencies', {
        templateUrl : "app/components/requisites/others/currencies/views/currencies.html",
        controller  : 'currenciescontrollers'
      })
      
       .when('/JVDescription', {
        templateUrl : "app/components/requisites/others/jvdescription/views/jvdescription.html",
        controller  : 'jvdescriptioncontrollers'
      })
      
       .when('/Locations', {
        templateUrl : "app/components/requisites/others/locations/views/locations.html",
        controller  : 'locations'
      })
      
       .when('/Manufacturers', {
        templateUrl : "app/components/requisites/others/manufacturers/views/manufacturers.html",
        controller  : 'manufacturerscontrollers'
      })
      
       .when('/Models', {
        templateUrl : "app/components/requisites/others/models/views/models.html",
        controller  : 'modelscontrollers'
      })
      
       .when('/Profitlosscodes', {
        templateUrl : "app/components/requisites/others/profitlosscodes/views/profitlosscodes.html",
        controller  : 'profitlosscodescontrollers'
      })
      
       .when('/RefNo', {
        templateUrl : "app/components/requisites/others/refno/views/refno.html",
        controller  : 'refnocontrollers'
      })
      
      .when('/Religions', {
        templateUrl : "app/components/requisites/others/religions/views/religions.html",
        controller  : 'religionscontrollers'
      })
      
      
      .when('/Subcategories', {
        templateUrl : "app/components/requisites/others/subcategories/views/subcategories.html",
        controller  : 'subcategoriescontrollers'
      })
      
      
      .when('/Titles', {
        templateUrl : "app/components/requisites/others/titles/views/titles.html",
        controller  : 'titlescontrollers'
      })
      
      
      .when('/Units', {
        templateUrl : "app/components/requisites/others/units/views/units.html",
        controller  : 'unitscontrollers'
      })
      
      
      .when('/Visastatus', {
        templateUrl : "app/components/requisites/others/visastatus/views/visastatus.html",
        controller  : 'visastatuscontrollers'
      })
      
      .when('/Deliverynote', {
        templateUrl : "app/components/transactions/deliverynotes/views/deliverynotes.html",
        controller  : 'deliverynotescontrollers'
      })
      
      
      .when('/Invoice', {
        templateUrl : "app/components/transactions/invoice/views/invoice.html",
        controller  : 'invoicecontrollers'
      })
      
      
      .when('/Payment', {
        templateUrl : "app/components/transactions/payment/views/payment.html",
        controller  : 'paymentcontrollers'
      })
      
      
      .when('/Purchaseorders', {
        templateUrl : "app/components/transactions/purchaseorders/views/purchaseorders.html",
        controller  : 'purchaseorderscontrollers'
      })
      
      
      .when('/Receipts', {
        templateUrl : "app/components/transactions/receipts/views/receipts.html",
        controller  : 'receiptscontrollers'
      })
      
      
      .when('/Salseorders', {
        templateUrl : "app/components/transactions/salesorders/views/salesorders.html",
        controller  : 'salesorderscontrollers'
      })
      
      
      .when('/Accounts', {
        templateUrl : "app/components/reports/accounts/views/accounts.html",
        controller  : 'accountscontrollers'
      })
      
      
      .when('/Payments', {
        templateUrl : "app/components/reports/payments/views/payments.html",
        controller  : 'paymentscontrollers'
      })
      
      
      .when('/Reciepts', {
        templateUrl : "app/components/reports/receipts/views/receipts.html",
        controller  : 'receiptscontrollers'
      })
      
      
      .when('/Stock', {
        templateUrl : "app/components/reports/stock/views/stock.html",
        controller  : 'stockcontrollers'
      })
      
      
      .when('/Groups', {
        templateUrl : "app/components/settings/groups/views/groups.html",
        controller  : 'groupscontrollers'
      })
      
      
      .when('/Permissions', {
        templateUrl : "app/components/settings/permissions/views/permissions.html",
        controller  : 'permissionscontrollers'
      })
      
       
      .when('/Profile', {
        templateUrl : "app/components/settings/profile/views/profile.html",
        controller  : 'profilecontrollers'
      })
      
      
       
      .when('/Users', {
        templateUrl : "app/components/settings/users/views/users.html",
        controller  : 'userscontrollers'
      })
      
      
      
      

      
   
    });
    