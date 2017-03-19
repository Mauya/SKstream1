angular.module('RouteControllers', []
app.controller('aboutController', ['$scope', function($scope) {
  $scope.memberTitle= "The Band Members";
  $scope.members = [ 
    { 
      'image': 'images/member1.jpg', 
      'name':  'James Day', 
      'play':  'Trombone', 
      'bio':   'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    }, 
    { 
      'image': 'images/member2.jpg', 
      'name': 'Greg Firsher', 
      'play': 'Guitarist and Vocalist', 
      'bio': 'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.' 
    },
    {
      'image': 'images/member3.jpg', 
      'name':  'Percy Jackson', 
      'play': 'Sexophone (alto and tenor)', 
      'bio': 'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {
      'image': 'images/member4.jpg', 
      'name': 'Ken Fort', 
      'play': 'Play Trumpet', 
      'bio': 'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {
      'image': 'images/member5.jpg', 
      'name': 'Reid Palmer', 
      'play': 'Play Upright Bass', 
      'bio': 'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    },
    {
      'image': 'images/member.jpg', 
      'name': 'Summer Tucker', 
      'play': 'Pianist', 
      'bio': 'Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate.'
    }
  ];
}]);

  