angular.module("RouteControllers", []);
app.controller("bookingController", ["$scope", function($scope){
	$scope.booking={Title:"For Special Events Make a Booking Here!"};

  // grab today and inject into field
  $scope.today = function() {
    $scope.dt = new Date();
  };
  
  // run today() function
  $scope.today();

  // setup clear
  $scope.clear = function () {
    $scope.dt = null;
  };

  // open min-cal
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
  
  // handle formats
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  
  // assign custom format
  $scope.format = $scope.formats[0];
  
}]);



  //     this.selectEvent = function(setEvent) {
  //       if (!setEvent.active) {
  //         angular.forEach(this.events, function(s) {
  //           s.active = false;
  //         });
  //         setEvent.active = true;
  //       }

  //       total();
  //     };


  //     // Datepicker

  //     $scope.open = function($event) {
  //       $event.preventDefault();
  //       $event.stopPropagation();

  //       $scope.opened1 = true;
  //       $scope.opened2 = false;
  //     };

  //     $scope.open2 = function($event) {
  //       $event.preventDefault();
  //       $event.stopPropagation();

  //       $scope.opened1 = false;
  //       $scope.opened2 = true;
  //     };

  //     $scope.clear = function() {
  //       $scope.dt = null;
  //       $scope.dt2 = null;
  //     };

  //     $scope.toggleMin = function() {
  //       $scope.minDate = $scope.minDate ? null : new Date();
  //     };
  //     $scope.toggleMin();

  //     $scope.dateOptions = {
  //       formatYear: 'yy',
  //       startingDay: 1
  //     };

  //     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  //     $scope.format = $scope.formats[0];

  //   }
  // ]);

