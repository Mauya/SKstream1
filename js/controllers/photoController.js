app.controller('photoController', function ($scope) {
  $scope.images = [
   {image:'images/photos/photo1.jpg', description: 'wedding'},
	 {image: 'images/photos/photo2.jpg', description: 'corporate'},
	 {image: 'images/photos/photo3.jpg', description: 'corporate'},
	 {image: 'images/photos/photo4.jpg', description: 'wedding'},
	 {image: 'images/photos/photo5.jpg', description: 'social'}
  ]; 
  $scope.currentImage = _.first($scope.images);
  $scope.imageCategories = _.uniq(_.pluck($scope.images, 'description'));
  
  $scope.setCurrentImage = function(image){
    $scope.currentImage = image;
  };
 });
