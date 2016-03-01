app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/landing');
    
    $stateProvider
      .state('landing', {
         url: '/landing',
         templateUrl: 'index.html',
      
      })
      .state('resume', {
         url: '/resume',
         templateUrl: "assetts/resume/resume.html",
 
      })
      
})