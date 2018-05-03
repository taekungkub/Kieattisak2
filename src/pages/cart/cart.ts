import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';


import { HomePage } from '../home/home'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  item;
  cart = [];
  constructor(public navCtrl: NavController, public navParams: NavParams , params: NavParams , public viewCtrl: ViewController) {
    this.item = params.data.item;

  }

  /*
  dismiss() {
    this.viewCtrl.dismiss();
  } */




}
