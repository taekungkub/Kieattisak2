import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  splash = true;
  secondPage = FirstPage;
 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
    setTimeout(() => this.splash = false, 3500);
  }

  OpenTabsPage(){
    this.navCtrl.push(TabsPage);
  }

}
