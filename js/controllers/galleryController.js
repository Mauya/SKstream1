angular.module('RouteControllers', [])
 app.controller("galleryController", function($Scope){
    var media = [
    {
    title:"Media",
      gallery:[
        {Audio:"Music"},
        {Visual:"Video"},
        {Pict:"Photos"}
    ]
}]
  $scope.media=media;
})