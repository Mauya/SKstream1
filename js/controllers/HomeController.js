app.controller('homeController', ['$scope', function($scope) {
  $scope.home ={title:"Swing Crew Events"};
  $scope.home = {title2:"Welcome"};
  $scope.myInterval = 5000;
  $scope.noWrapSlides=false;
  $scope.active = 0;
  $scope.slides= [
    {
      image: 'images/home/swing1.jpg',
      id: 0,
      caption: 'Social event'
    },
    {
      image: 'images/home/swing2.jpg',
      id: 1,
      caption: 'Social event'
    },
    {
      image: 'images/home/swing3.jpg',
      id:2,
      caption: 'Social event'
    },
    {
      image: 'images/home/swing4.jpg',
      id:3,
      caption: 'Corporate function'
    },
    {
      image: 'images/home/swing5.jpg',
      id: 4,
      caption: 'Corporate function'
    },
    {
      image: 'images/home/swing6.jpg',
      id: 5,
      caption: 'Wedding function'
    }
  ];
}]);