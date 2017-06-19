<!doctype html>
<html >
  <head>

<!-- Working Code  -->

	<link rel="stylesheet" href="https://unpkg.com/ng-table@2.0.2/bundles/ng-table.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> 
     <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.js"></script>  -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
     
    <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0-rc.2/angular.min.js"></script>-->

	<!--<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	
	
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>  
    <script src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular-route.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.4/angular-material.js"></script> 
<!--     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-animate.min.js"></script> 
    
    
   		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-aria.min.js"></script> 
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-animate.min.js"></script> -->
    
    
    
    
	<script src="https://unpkg.com/ng-table@2.0.2/bundles/ng-table.min.js"></script> 
	
	    
    <!-- Working Code  -->

 <!--  <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>-->
 
 <script src="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0-rc.5/angular-material.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/ng-dialog/0.6.2/js/ngDialog.min.js"></script>
 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script> 
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/svg-assets-cache.js"></script> 
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

<link rel="stylesheet" href="https://material.angularjs.org/1.1.4/docs.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.4/angular-resource.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
<link href="assets/js/css/navbar.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.1/bootstrap3-typeahead.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-cookies.min.js"></script>

<script>
//var app = angular.module("myApp", ["ngTable","ngRoute","ngMaterial","smart-table","ui.bootstrap","ngMessages","material.svgAssetsCache","ngResource","ngDialog","ngAria","appProductServices"]);


    
</script>

    
  

    
  </head>

<body ng-app="myApp" ng-controller="DemoController">



<div class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Requisites <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                         <li><a href="#/Categories">Categories</a></li>
                         <li><a href="#/Customers">Customers</a></li>
                         <li><a href="#/Employees">Employees</a></li>
                         <li><a href="#/Products">Products</a></li>
                         <li><a href="#/Salespeople">Salespeople</a></li>
                         <li><a href="#/Suppliers">Suppliers</a></li>
                         <li>
                                                 
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Others<b class="caret"></b></a>
                          <ul class="dropdown-menu">
                          <li><a href="#/Acknowledgementletters">Acknowledgementletters</a></li>
                          <li><a href="#/Balancesheetcodes">Balancesheet codes</a></li>
                          <li><a href="#/Cities">Cities</a></li>
                          <li><a href="#/Countries">Countries</a></li>    
                          <li><a href="#/Currencies">Currencies</a></li>
                          <li><a href="#/JVDescription">J V Description</a></li>
                          <li><a href="#/Locations">Locations</a></li>
                          <li><a href="#/Manufacturers">Manufacturers</a></li>      
                          <li><a href="#/Models">Models</a></li>                 
                          <li><a href=#/Profitlosscodes>Profit loss code</a></li>                 
                          <li><a href="#/RefNo">RefNo</a></li>                 
                          <li><a href="#/Religions">Religions</a></li>   
                           <li><a href="#/Subcategories">Subcategories</a></li>                 
                          <li><a href="#/Titles">Titles</a></li>                 
                          <li><a href="#/Units">Units</a></li>                 
                          <li><a href="#/Visastatus">Visa status</a></li>                                   
                          </ul>
                         </li>
                         </ul>
                        </li>
                        <li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Transactions <b class="caret"></b> </a>
                          <ul class="dropdown-menu">
                         <li><a href="#/Deliverynote">Deliverynotes</a></li>
                         <li><a href="#/Invoice">Invoice</a></li>
                         <li><a href="#/Payment">Payment</a></li>
                         <li><a href="#/Purchaseorders">Purchaseorders</a></li>
                         <li><a href="#/Receipts">Receipts</a></li>
                         <li><a href="#/Salseorders">Salseorders</a></li>
                         </ul>
                         </li>
                        
                         <li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Reports <b class="caret"></b></a>
                         <ul class="dropdown-menu">
                         <li><a href="#/Accounts">Accounts</a></li>
                         <li><a href="#/Payments">Payments</a></li>
                         <li><a href="#/Reciepts">Reciepts</a></li>
                         <li><a href="#/Stock">Stock</a></li>
                                               
                         </ul>
                         </li>
                         
                          <li><a a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<b class="caret"></b></a>
                           <ul class="dropdown-menu">
                         <li><a href="#/Groups">Groups</a></li>
                         <li><a href="#/Permissions">Permissions</a></li>
                         <li><a href="#/Profile">Profile</a></li>
                         <li><a href="#/Users">Users</a></li>
                                               
                         </ul>
                          
                          </li>
                           <li><a href="#" target="_blank">Logout</a></li>
                        
                            </ul>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </div>



<div ng-view></div>




  <script src="app/app.module.js"/></script>
  <script src="app/app.route.js"/></script>
 <script src="app/components/products/controllers/productMain.js"/></script>
   <script src="app/shared/smart-table.js"/></script>
   <script src="app/shared/ui-bootstrap-tpls-2.5.0.js"/></script>
    <script src="assets/js/common.js"/></script>
     <script src="assets/js/navbar.js"/></script>
     <script src="app/shared/services/services.js"/></script>
      
 <script>
 app.controller('DemoController', function ($scope,$compile) {
	    
 });

 
 </script>
</body>

  
</html> 

