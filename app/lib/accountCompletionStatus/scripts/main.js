'use strict';

/**
 * @ngdoc function
 * @name tApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tApp
 */
angular.module('SandBoxApp')
  .controller('accountCompletionStatusCtrl', function($scope, $mdBottomSheet) {

  	$scope.version = "0.1";


    $scope.showBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'lib/accountCompletionStatus/html/bottom-sheet.html',
            controller: 'BottomSheetCtrl',
            targetEvent: $event
        });
    };








  	$scope.completionNodes = [
	  {
		  "title":"Profile",
		  "description":"",
          "imageUrl": "http://cdn.destructoid.com/ul/282044-B1.jpg",
		  "complete": false,
		  "tasks": [
			  {
				  "title": "What I do well",
				  "complete": false
			  },
			  {
				  "title": "Highlights",
				  "complete": false
			  }			  
		  ]
	  },
	  {
		  "title":"Resume",
		  "description":"",
          "imageUrl": "http://www.kingsacademy.com/mhodges/11_Western-Art/27_Popular_Modern-Realism/Rockwell/Rockwell_1916_The-baby-carriage.jpg",
		  "complete": false,
		  "tasks": [
			  {
				  "title": "What I do well",
				  "complete": false
			  },
			  {
				  "title": "Highlights",
				  "complete": false
			  }			  
		  ]
	  }
	  	
  	];
  })

.controller('BottomSheetCtrl',function($scope, $mdBottomSheet) {

    $scope.items = [
        { name: 'Hangout', icon: 'hangout' },
        { name: 'Mail', icon: 'mail' },
        { name: 'Message', icon: 'message' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Facebook', icon: 'facebook' },
        { name: 'Twitter', icon: 'twitter' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };

});

