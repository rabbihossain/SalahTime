<ion-view style="" title="Quran" ng-controller="SurahListCtrl">
    <ion-content class="has-header" padding="true">
        <div class="list" >
            <div class="item item-button-right" id="suralist" ng-repeat="surah in surahs | filter:filterText"><a href="#/surah/{{surah.number}}" class="button button-balanced"><i class="icon ion-arrow-right-a"></i></a><span class="surah_number">{{surah.number}}</span>. {{surah.name_en}} ({{surah.name_ar}})</div>
        </item>
    </ion-content>
</ion-view>

