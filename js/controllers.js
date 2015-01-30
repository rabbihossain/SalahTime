Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

var praytimes = PrayTimes();

function get_prayer_times(method, prayer_date, coords, tz) {
    var tz = -(new Date()).getTimezoneOffset() / 60;

    praytimes.setMethod(method);
    var prayer_times = praytimes.getTimes(prayer_date, coords, tz);
    return prayer_times;
};

function setScope($scope, bing) {
    if (!bing) {
        var todate = new Date(document.getElementById('ledate').value);
    } else {
        var todate = new Date();
    }

    localforage.getItem('method', function(data) {
        var wakts = get_prayer_times(data, todate, [$scope.coords.lat, $scope.coords.long], null);

        // the date is there to form a valid 'date' for conversion

        nowdate = moment().format('YYYY-MM-DD');

        wakts.fajr = moment(nowdate + ' ' + wakts.fajr).format('hh:mm A');
        wakts.sunrise = moment(nowdate + ' ' + wakts.sunrise).format('hh:mm A');
        wakts.dhuhr = moment(nowdate + ' ' + wakts.dhuhr).format('hh:mm A');
        wakts.asr = moment(nowdate + ' ' + wakts.asr).format('hh:mm A');
        wakts.sunset = moment(nowdate + ' ' + wakts.sunset).format('hh:mm A');
        wakts.maghrib = moment(nowdate + ' ' + wakts.maghrib).format('hh:mm A');
        wakts.isha = moment(nowdate + ' ' + wakts.isha).format('hh:mm A');
        wakts.midnight = moment(nowdate + ' ' + wakts.midnight).format('hh:mm A');
        wakts.imsak = moment(nowdate + ' ' + wakts.imsak).format('hh:mm A');

        $scope.wakts = wakts;
        $scope.$apply();
    });
};

angular.module('app.controllers', ['LocalForageModule'])


.controller("SalatCtrl", ['$scope', '$localForage', '$state', function($scope, $localForage, $state) {

    $scope.coords = {
        'lat': 0,
        'long': 0
    };

    $scope.wakts = {
        'imsak': '...',
        'fajr': '...',
        'sunrise': '...',
        'dhuhr': '...',
        'asr': '...',
        'sunset': '...',
        'maghrib': '...',
        'isha': '...',
        'midnight': '...'
    };

    $scope.datemodel = new Date().toDateInputValue();

    $scope.setScope = function(bind) {
        setScope($scope, bind)
    };

    $scope.updateScope = function() {
        navigator.geolocation.getCurrentPosition(function(data) {
            $scope.setcoords(data.coords.latitude, data.coords.longitude);
            $scope.setScope();

        }, function(error) {
            alert(error.message);
        }, {
            timeout: 60000
        });
    }

    $scope.setcoords = function(lat, longi) {
        $scope.coords.lat = lat;
        $scope.coords.long = longi;
    }

    $localForage.getItem('method').then(function(data) {
        if (!data) {
            $state.go('settings');
        } else {
            $scope.updateScope();
        }
    });



    return {
        require: 'ngChange'
    }

}])

.controller("AlarmCtrl", ['$scope', function($scope) {



}])

.controller("SettingsCtrl", ['$scope', '$localForage', function($scope, $localForage) {

    $localForage.getItem('method').then(function(data) {
        if (!data) {
            $localForage.setItem('method', 'MWL');
            $scope.choice = "MWL";
        } else {
            $scope.choice = data;
        }
    });

    $scope.onChange = function() {
        $localForage.setItem('method', document.getElementById('choice').value);
    }
    return {
        require: 'ngChange'
    }
}]);