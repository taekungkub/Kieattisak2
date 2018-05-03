import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        id:1,
        image:"5.png",
        name:"สันคอหมูอบ",
        description:"รสชาติเปรี้ยว แซ่บ ด้วยสารพัดเครื่องปรุงไทยๆโรยด้วยข้าวคั่ว กลิ่นหอมโดนใจ",
        price:130,
        cost:1
      },
      {
        id:2,
        image:"6.png",
        name:"คอหมูสูตร Honey",
        description:"สูตร Honey อบน้ำผึ้ง กลมกล่อมเป็นเอกลักษณ์ น้ำหมักซึมเข้าถึงตัวเนื้อ",
        price:150,
        cost:1
      },
      {
        id:3,
        image:"16.jpg",
        name:"สันคอหมูสูตร Honey",
        description:"สันคอหมูสูตร Honey สันคอหมูลาบแซ่บ",
        price:160,
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
