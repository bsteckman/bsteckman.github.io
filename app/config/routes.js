app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
         .state('resume', {
         url: '/resume',
         templateUrl: "assets/pages/resume/resume.html",
 
      })
      
})