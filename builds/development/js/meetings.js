myApp.controller("MeetingsController",
  function($scope, $firebaseArray) {

	var ref = new Firebase("https://angularmz.firebaseio.com/meetings");

	$scope.meetings = $firebaseArray(ref);

	$scope.addMeeting = function () {
		$scope.meetings.$add({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function(){
			$scope.meetingname = '';
		});
	}; //addMeeting
}); //MeetingsController