<!-- <div class="bar bar-subheader button-bar bar-positive">
  <a class="button button-icon"><i class="icon ion-play"></i></a>
  <a class="button button-icon"><i class="icon ion-pause"></i></a>
  <a class="button button-icon"><i class="icon ion-stop"></i></a>
  0:00
</div> -->
<ion-view style="" title="{{surah.name_ar}} ({{surah.name_en}})">
    <ion-content class="has-header" padding="true">
    	<p class="{{ayah.class}}" ng-repeat="ayah in surah.ayahs track by $index" >
    		<span ng-if="$index % 2 != 0">{{($index + 1)/ 2}}. </span>{{ayah.text}}
    	</p>
    </ion-content>
</ion-view>