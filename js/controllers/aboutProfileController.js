app.controller('aboutProfileController', ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams){
    $scope.routeParams = {};
    $scope.profiles = $routeParams.profiles.id;

    var init = function () {
      $scope.initCurrentParams = {};
      $scope.$route = $route;
      $scope.initCurrentParams.id = $scope.$route.current.params.id;
    };
    init();

    $scope.$on('$routeChangeSuccess', function() {

      $scope.routeChangeSuccessCurrentParams = {};
      $scope.$route = $route;
      $scope.routeChangeSuccessCurrentParams.id = $scope.$route.current.params.id;
    });

       $scope.profiles=[ 
    { 
      'id': '1',
      'image': 'images/about/member1.jpg', 
      'name':  'James Day', 
      'instrument':  'Trombone', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    }, 
    { 
      'id': '2',
      'image': 'images/about/member2.jpg', 
      'name': 'Greg Firsher', 
      'instrument': 'Guitarist and Vocalist', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.' 
    },
    {
      'id': '3',
      'image': 'images/about/member3.jpg', 
      'name':  'Percy Jackson', 
      'instrument': 'Sexophone (alto and tenor)', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {
      'id': '4',
      'image': 'images/about/member4.jpg', 
      'name': 'Ken Fort', 
      'instrument': 'Play Trumpet', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {
      'id': '5',
      'image': 'images/about/member5.jpg', 
      'name': 'Reid Palmer', 
      'instrument': 'Play Upright Bass', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {'id': '6',
      'image': 'images/about/member6.jpg', 
      'name': 'Summer Tucker', 
      'instrument': 'Pianist', 
      'description':'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    }
  ];
  // member details menu described here. First Previous button
      if($routeParams.id>0)
         $scope.prevMember=number($routeParams.id)-1;
       else
        $scope.prevMember = $scope.members.length-1;

  //next button
      if(routeParams.id<$scope.members.length-1)
        scope.nextMember = Number($routeParams.id)+1;
      else
        $scope.nextMember = 0;

}]);