angular.module('app.controllers', [])

.controller("SurahCtrl", ['$scope','$stateParams','FeedService', function ($scope,$stateParams,Feed) {  
	console.log($stateParams.surahId);    
	try {
        Feed.parseFeedNoGoogle("/js/res/surahs/" + $stateParams.surahId + ".json").then(function(res){
        	$scope.surah = res.data;
        	$scope.surah.ayahs = [];
        	for (var i = 0; i < $scope.surah.ayahs_ar.length; i++) {
        		$scope.surah.ayahs.push({'class': 'arabic-text', 'text': $scope.surah.ayahs_ar[i]});
        		$scope.surah.ayahs.push({'class': 'english-text', 'text': $scope.surah.ayahs_en[i]});
        	};
        });
    }
    catch(e) {}
}])

.controller("SurahListCtrl", ['$scope','$stateParams','FeedService', function ($scope,$stateParams,Feed) {  
	console.log($stateParams.surahId);    
	try {
        Feed.parseFeedNoGoogle("/js/res/surah_list.json").then(function(res){
        	$scope.surahs = res.data;
        });
    }
    catch(e) {}
}]);