<ion-nav-bar class="bar-royal" ng-controller="SettingsCtrl">
            <ion-nav-back-button class="button-icon icon ion-ios7-arrow-back no-animation">&nbsp;&nbsp;&nbsp;&nbsp;</ion-nav-back-button>
        </ion-nav-bar>
<ion-view style="" title="Settings" ng-controller="SettingsCtrl">
    <ion-content class="has-header" padding="true">
        <p class="krossware" style="margin:1em 0">There are several conventions for calculating prayer times. Please select your preferrable convention. This app by default uses the Muslim World League convention for calculating prayer times.</p>
        <form>
            Method of calculations:
                <select ng-model="choice" id="choice" ng-change="onChange()" ng-model-options="{ updateOn: 'change' }">
                	<option value="MWL">Muslim World League</option>
                	<option value="ISNA">Islamic Society of North America</option>
                	<option value="Egypt">Egyptian General Authority of Survey</option>
                	<option value="Makkah">Umm al-Qura University, Makkah</option>
                	<option value="Karachi">University of Islamic Sciences, Karachi</option>
                	<option value="Tehran">Institute of Geophysics, University of Tehran</option>
                	<option value="Jafari">Shia Ithna Ashari (Ja`fari)</option>
                </select>
        </form>
        <a href="#" class="button button-block button-positive icon-left icon-back" ng-click="history.go(-1)" style="margin-top:1em">Back</a>
    </ion-content>
</ion-view>