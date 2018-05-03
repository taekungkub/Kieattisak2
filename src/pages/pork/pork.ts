import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { DetailPage } from '../detail/detail';


/**
 * Generated class for the PorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pork',
  templateUrl: 'pork.html',
})
export class PorkPage {
  items = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        id:1,
        image:"7.png",
        name:"สลัดแฮม น้ำข้น",
        description:"ไว้ทานเล่นข้างเคียงกับเมนูหลัก ออกรสเปรี้ยวจากน้ำสลัด",
        price:89,
        cost:1
      },
      {
        id:2,
        image:"8.jpg",
        name:"ข้าวสวย",
        description:"ข้าวสวยหอมๆ สุกร้อนๆ น่ารับประทาน",
        price:20,
        cost:1
      },
      {
        id:3,
        image:"9.jpg",
        name:"น้ำจิ้มแจ่ว (กระปุก)",
        description:"น้ำจิ้มสูตรเด็ด แซ่บอร่อยถึงใจ",
        price:29,
        cost:1
      },
      {
        id:4,
        image:"10.jpg",
        name:" มันอบ Jacket Potato",
        description:" มันอบ Jacket Potato นุ่มหอมอร่อยถึงใจ",
        price:49,
        cost:1
      }

     
  ] //item

  } //constructor
  OpenCartPage(){
    this.navCtrl.push(CartPage)
  }
  OpenDetailPage(item) {
    this.navCtrl.push(DetailPage,{item:item})
  }

}
