import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the RicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rice',
  templateUrl: 'rice.html',
})
export class RicePage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        id: 1,
        image: "12.jpeg",
        title: "ข้าวคอหมูอบมิสมล",
        description: "ข้าวคอหมูอบมิสมล Baked pork neck with Honey Sauce on rice",
        price: 85,
        cout: 1,
      },
      {
        id: 2,
        image: "13.jpeg",
        title: "  ข้าวกะเพราซี่โครงหมูสับ",
        description: "ข้าวกะเพราซี่โครงหมู Stir-fried pork rib and basil leaves with rice",
        price: 85,
        cout: 1,
      },
      {
        id: 3,
        image: "14.jpeg",
        title: "  ข้าวกะเพราหมูกรอบ",
        description: "ข้าวกะเพราหมูกรอบ Crispy pork belly with Thai basil on rice",
        price:59,
        cout: 1,
      },
      {
        id: 4,
        image: "15.jpg",
        title: "ลาบซี่โครงหมู",
        description: "ลาบซี่โครงหมู Spicy Spare Ribs salad",
        price:59,
        cout: 1,
      },


    ] //items
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RicePage');
  }

  OpenDetailPage(item) {
    this.navCtrl.push(DetailPage, { item: item })
  }

  OpenCartPage(){
    this.navCtrl.push(CartPage)
  }

 
}
