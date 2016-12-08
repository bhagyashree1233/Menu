// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.
var App=angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova','starter.service'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
.state('app.gallery',{
  url:'/gallery',
  views:{
    'menuContent':{
      templateUrl:'templates/gallery.html'
    }
  }
}
)
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
 .state('app.games', {
      url: '/games',
      views: {
        'menuContent': {
          templateUrl: 'templates/game.html'
        }
      }
    })
       .state('app.StudentFee', {
      url: '/StudentFee',
      views: {
        'menuContent': {
          templateUrl: 'templates/StudentFee.html',
           controller: 'StdFee'
        }
      }
    })

      .state('app.music', {
      url: '/music',
      views: {
        'menuContent': {
          templateUrl: 'templates/music.html',
          controller:'StudentInform'
        }
      }
    })
     .state('app.volume', {
      url: '/StudentTest',
      views: {
        'menuContent': {
          templateUrl: 'templates/StudentTest.html',
          controller:'StdTst'
        }
      }
    })
    .state('app.login', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html'
        }
      }
    })
     .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
      .state('app.dispaly', {
      url: '/display',
      views: {
        'menuContent': {
          templateUrl: 'templates/display.html',
          
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
   .state('app.profile', {
      url: '/Profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/Profile.html',
           controller: 'Prof'
        }
      }
    })// Ionic Starter App
.state('app.camera', {
url: "/camera",
views: {
'menuContent': {
templateUrl: "templates/camera.html",
controller: 'PictureCtrl'

}
}
})

.state('app.Events',{
  url:"/Events",
  views:{
    'menuContent':{
      templateUrl:"templates/Events.html",
      controller:'EventCtr'
    }
  }
})

.state('app.StudentAtt',{
  url:"/Student",
  views:{
    'menuContent':{
      templateUrl:"templates/StudentAtt.html",
     controller:'StudentAtt'
    }
  }
})
.state('app.Test',{
  url:"/Test",
  views:{
    'menuContent':{
      templateUrl:"templates/Test.html",
   controller:'bC'
    }
  }
}

)
 .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
 


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

 


