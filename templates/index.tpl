<ion-view title="SalahTime" ng-controller="SalatCtrl">
    <ion-content padding="true" class="has-header">
        <div>
            <p style="text-align:center">Latitude: <span ng-bind="coords.lat.toFixed(4)" ></span>, Longitude: <span ng-bind="coords.long.toFixed(4)"></span></p>
            <label class="item item-input">
            <input type="date" id="ledate" ng-change="setScope()" ng-model="datemodel" ng-model-options="{ updateOn: 'change' }"> 
            </label>
        </div>
        <div>
            <table style="width:100%; text-align: center;" border="1">
                <tbody>
                    <tr class="wakt imsak">
                        <td>Imsak</td>
                        <td><span ng-bind="wakts.imsak"></span></td>
                    </tr>
                    <tr class="wakt fazr active">
                        <td>Fajr</td>
                        <td><span ng-bind="wakts.fajr"></span></td>
                    </tr>
                    <tr class="wakt sunrise">
                        <td>Sunrise</td>
                        <td><span ng-bind="wakts.sunrise"></span></td>
                    </tr>
                    <tr class="wakt dhuhr active">
                        <td>Dhuhr</td>
                        <td><span ng-bind="wakts.dhuhr"></span></td>
                    </tr>
                    <tr class="wakt asr active">
                        <td>Asr</td>
                        <td><span ng-bind="wakts.asr"></span></td>
                    </tr>
                    <tr class="wakt sunset">
                        <td>Sunset</td>
                        <td><span ng-bind="wakts.sunset"></span></td>
                    </tr>
                    <tr class="wakt maghrib active">
                        <td>Maghrib</td>
                        <td><span ng-bind="wakts.maghrib"></span></td>
                    </tr>
                    <tr class="wakt isha active">
                        <td>Isha</td>
                        <td><span ng-bind="wakts.isha"></span></td>
                    </tr>
                    <tr class="wakt midnight">
                        <td>Midnight</td>
                        <td><span ng-bind="wakts.midnight"></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="button-bar" id="lebuttonbar">
            <a class="button icon-center ion-refresh button-balanced" ng-click="updateScope()"></a>
            <a class="button icon-center ion-settings button-royal" href="#/settings"></a>
            <a class="button icon-center ion-help button-positive" href="#/help"></a>
            <a href="#/about" class="button icon-center ion-information-circled button-assertive"></a>
        </div>
    </ion-content>
</ion-view>