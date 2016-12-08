angular.module('starter.service',[])
.factory('Camera',function($q) {
alert('factory')
   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

});
App.service('hexafy',function(){
      this.myFunction=function(x){
            return x.toString(16);
      }
})