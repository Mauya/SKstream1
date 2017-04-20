angular.module('RouteControllers', [])
app.controller('aboutController', ['$scope', '$route', function($scope, $route){
  var vm =this;
    vm.reloadData=function(){
      $route.reload();
    }
    $scope.memberTitle= "SwingCrew Band Profile";
    $scope.members=[ 
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
  
}]);