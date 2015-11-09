
angular.module('contactsApp',[]).controller('ContactsController', ['$scope', 'contactsService', function ($scope, contactsService) {
    $scope.contact = {};
    $scope.contacts = [];

    contactsService.getData().success(function (data) {
        $scope.contacts = data.contacts;
    });

    $scope.showAddForm = false;

    $scope.addContact = function () {
        contactsService.add($scope.contact).success(function (data) {
            $scope.contacts.push(data.contact);
            $scope.contact = {};
            $scope.showAddForm = false;
        });
    }
}]).factory('contactsService', ['$http', function ($http) {
    return {
        getData: function () {
            return $http.get('/getContacts');
        },
        add: function (contact) {
            return $http.post('/addContact',contact);
        }
    };
}]);