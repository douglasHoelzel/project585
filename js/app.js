app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/meetingNotes", {
        templateUrl : "meetingNotes.html"
    })
    .when("/contactUs", {
        templateUrl : "contactUs.html"
    })
    .when("/meetingSchedule", {
        templateUrl : "meetingSchedule.html"
    })
    .when("/teamRules", {
        templateUrl : "teamRules.html"
    }),
    .when("/conceptDocment", {
        templateUrl : "conceptDocment.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    });
});
