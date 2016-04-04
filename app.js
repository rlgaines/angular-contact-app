var app = angular.module('contactApp', []);
app.controller('contacts', function($scope){

    $scope.master = {};

	$scope.clients = [
	{name:"Mike Lopez", email:"bigdaddy@aol.com", number:'(929) 392-3848'},
	{name:"Jim Sanza", email:"sazaman@juno.com", number:'(912) 4294455'},
	{name:"Tony Montana", email:"hopoutdaporsche@hotmail.com", number:'(742) 948-5502'}
		];

	 $scope.update = function(client) {
	 	console.log(client);
        $scope.master = angular.copy(client);
        $scope.clients.push($scope.master)
        $scope.client = null;
        console.log($scope.clients)
      };
})

