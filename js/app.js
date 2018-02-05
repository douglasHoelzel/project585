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
    })
    .when("/conceptDocment", {
        templateUrl : "conceptDocument.html"
    })
    .when("/requirements", {
        templateUrl : "requirements.html"
    })
    .when("/softwareDesign", {
        templateUrl : "softwareDesign.html"
    })
    .when("/userManual", {
        templateUrl : "userManual.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    });
});
