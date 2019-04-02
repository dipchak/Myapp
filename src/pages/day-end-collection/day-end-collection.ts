import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DayEndCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-day-end-collection',
  templateUrl: 'day-end-collection.html',
})
export class DayEndCollectionPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayEndCollectionPage');
  }

}
