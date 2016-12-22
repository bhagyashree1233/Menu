angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	//This Is the 4 Commit from workspace
//Edited Controller in git
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  
   .controller('StudentInform',function($scope,$cordovaCamera, $http){
    $http.get("music.html")
    .then(function(response) {
      $scope.myWelcome = response.data;
  });
       $scope.Detail={
          Name:'',
          ParentName:'',
          MobileNumber:'',
          EmailId:'',
          Address:'',
       }
   $scope.click=function(){
       console.log('Obj :', $scope.Detail);
       //alert($scope.Detail.Name+$scope.Detail.ParentName);
      }
     
      $scope.StudentPhoto = function() {
  document.addEventListener("deviceready", function () {
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG, 
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
	  
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image= "data:image/jpeg;base64," + imageData;
     $scope.myImage = image; 
    }, function(err) {
      alert(err) 
      console.log(err);
    });    

  }, false);  
 } 
     
    }) 
       
     
   

  .controller('StdFee',['$scope', function($scope){
$scope.payments={

  Avatar:'/img/sc1.jpg',Name:'Harish',AY:'2016-2017',Amount:'85,100',Balance:'0',

  Recipts:[
  {
  ReciptNum:'CYF123',ReciptDate:'22-10-2016' ,Amount:'2,500'
  },
  {
  ReciptNum:'CYF124',ReciptDate:'23-10-2016' ,Amount:'1,500'
  },
  {
  ReciptNum:'CYF125',ReciptDate:'24-10-2016' ,Amount:'1,900'  
  }
  ]
}
  
  }])
   
    .controller('bC',['$scope',function($scope){
      $scope.bVar={
        value:false
      }
      $scope.bclick=function(){
          if($scope.bVar.value){
      console.log('bluetooth on')

    }else{
    console.log('bluetooth off')
    }
      }
    }])

 
  .controller('mC',['$scope',function($scope){
    $scope.myVar={
      value:false
    }
    $scope.wclick=function(){
  
    
    if($scope.myVar.value){
      console.log('Wlan on')

    }else{
      console.log('Wlan off')
    }
    }
  }
  ])

.controller('PictureCtrl', function($scope, $cordovaCamera) {

$scope.takePhoto = function() {
  document.addEventListener("deviceready", function () {
    console.log("enters");

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
     
      targetWidth: 100,
      targetHeight: 100,
      
      saveToPhotoAlbum: true,
	  correctOrientation:true
	  
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      console.log('Enter in')
     var image= "data:image/jpeg;base64," + imageData;
     
    }, function(err) {
      alert(err)
      console.log(err);
    });

  }, false); 
 } 
 module.controller('PictureCtrl', function($scope, $cordovaCamera) {

  document.addEventListener("deviceready", function () {

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });

  }, false);

 
 });

$scope.call = function(){
  alert('clicked');
}

})

.controller('ScCtrl',['$scope',function($scope){
  $scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});
}])


.controller('StdTst',['$scope',function($scope){

$scope.Survey=[
{  
  question:'Question1 hdddddddd dddd ddddddd jffffff fffff fffffffff fgtftftttttt ttttt tttghg fyh gfghff kljhkjlhjkl jhkjhkj',
  answerType:"checkbox",
  answers:['Answer1 dffffffffffffdfffffffffffffff gffffffffffffffffffffffffffffffffffffffffffffffff yyyyyyyyyyyyyyyyyyyyyyy','Answer2  dffffffffffffdfffffffffffffff gffffffffffffffffffffffffffffffffffffffffffffffff yyyyyyyyyyyyyyyyyyyyyyy','Answer3'],
  UserAnswer:''
},
{
  question:'Question2  hdddddddd dddd ddddddd jffffff fffff fffffffff fgtftftttttt ttttt tttghg fyh gfghff kljhkjlhjkl jhkjhkj',
  answerType:"textview",
  UserAnswer:''
},
{
  question:'Question3',
  answerType:"radio",
   answers:['Answer1','Answer2'],
  UserAnswer:''
}


]
/*$scope.myFunction=function(data,obj){
  
  if(data=='check'){
    obj.answerType.checkbox=true;
    obj.answerType.radio=false;
    obj.answerType.Textview=false;
  }else if(data=='radio'){
   obj.answerType.radio=true;
   obj.answerType.checkbox=false;
   obj.answerType.Textview=false;
  }else{
   obj.answerType.Textview=true; 
   obj.answerType.radio=false;
   obj.answerType.checkbox=false;   
  } 
}*/

}])

 .controller('Prof',['$scope',function($scope){
     $scope.records=[{Name:'Rajesh',class:'I A Section',src:'sc1.jpg',subId:1},
     {Name:'Ramya',class:'I B Section',src:'sc2.jpg',subId:2},
     {Name:'Raksha',class:'I C Section',src:'sc3.jpg',subId:3},
     {Name:'Revathi',class:'I D Section',src:'sc4.jpg',subId:4}] 
     $scope.click=function(my_string){
       alert(my_string);
     }
    }])
    .controller('StudentAtt',['$scope',function($scope){
     $scope.studentList=[{ Subid:1,Name:'Rajesh',src:'sc1.jpg',Present:false},
     { Subid:2,Name:'Ramya',src:'sc2.jpg',Present:true},
     {Subid:3,Name:'Raksha',src:'sc3.jpg',Present:true},
     {Subid:4,Name:'Revathi',src:'sc4.jpg',Present:true}] 
     
     $scope.click=function(li)
     {
       if(li.Present===true){
          
          li.Present=false;
        
        
       }else{
         li.Present=true;
        

       }
     }
    }])
    .controller('EventCtr',function($scope){
     $scope.eventList=[
     {
       Date:'1-06-2016',Event:'Drawing Competation',Pic:'/img/drawing.jpg'
     },
     {
        Date:'2-06-2016',Event:'Rangoli Competation',Pic:'/img/Rangoli.jpg'
     },
     {
        Date:'3-06-2016',Event:'Mahandi Competation',Pic:'/img/mehendi.jpg'
     }
     ] 
    })

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {});

