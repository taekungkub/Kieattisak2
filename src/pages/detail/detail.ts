import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item;
  cart = [];
  constructor(public navCtrl: NavController, public navParams: NavParams , params: NavParams) {
    this.item = params.data.item;

  }

  cout:number;

  addPlus(item){
    item.cout +=1;
 

  }
  subTrack(item){
    if (item.cout === 1) {
      return;
    }
    item.cout -=1;
  }

  OpenCartPage() {
    this.navCtrl.push(CartPage)
  }

}
