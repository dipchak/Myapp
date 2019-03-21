import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';

/**
 * Generated class for the CollectionhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-collectionhistory',
  templateUrl: 'collectionhistory.html',
})
export class CollectionhistoryPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionhistoryPage');
  }

}
