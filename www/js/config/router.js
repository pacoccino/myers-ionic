application.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:
        .state('tab.test', {
            url: '/test',
            views: {
                'tab-test': {
                    templateUrl: 'templates/tab-test.html',
                    controller: 'TestCtrl'
                }
            }
        })
        .state('tab.myscore', {
            url: '/myscore',
            views: {
                'tab-myscore': {
                    templateUrl: 'templates/tab-result-perso.html',
                    controller: 'ResultPersoCtrl'
                }
            }
        })

        /*
        .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })*/;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
