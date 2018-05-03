import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { CartPage } from '../cart/cart';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DetailPage } from '../detail/detail';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = [
      {
        id: 1,
        image: "1.png",
        title: "ซี่โครงหมูบาร์บีคิว",
        description: "สูตร Country รสชาติที่คนไทยคุ้นเคย รสชาติเผ็ดจี๊ดจ๊าด อร่อยจนน้ำตาไหล ยิ่งทานกับน้ำจิ้มยิ่งแซ่บอย่าบอกใคร บอกคำเดียวสำหรับคนชอบทานเผ็ด",
        price: 250,
        cout: 1,
      },
      {
        id: 2,
        image: "2.jpg",
        title: "ซี่โครงหมูบาร์บีคิว อบน้ำผึ้ง",
        description: "สูตรลับพิเศษที่ทำมานานนับ 30 ปีรสชาติกลมกล่อมเป็นเอกลักษณ์ เนื้อหนานุ่ม น้ำหมักซึมเข้าถึงตัวเนื้อ มีมันแทรกกำลังดี กระดูกอ่อนแทะอร่อย",
        price: 610,
        cout: 1,
      },
      {
        id: 3,
        image: "3.png",
        title: "ซี่โครงหมูบาร์บีคิว รสปาปิก้า",
        description: "ซี่โครงหมูบาร์บีคิวส่วนซี่โครงอ่อน รสปาปิก้า (Paprika BBQ Baby Back Ribs)  ผสมผสานรสชาติอย่างลงตัวโดยมีความเผ็ดร้อนเล็กน้อย",
        price: 190,
        cout: 1,
      },
      {
        id: 4,
        image: "4.png",
        title: "ซี่โครงหมู American",
        description: "สไตล์ซี่โครงหมูอบBBQดั้งเดิม สไตล์อเมริกันมีกลิ่นและรสของมัสตาร์ดแตะปลายลิ้นและจมูกเล็กน้อย",
        price: 190,
        cout: 1,
      },
      {
        id: 5,
        image: "11.jpeg",
        title: "ซี่โครงสแปร์ริบส์เป็นแผ่นส่วน St.Louis Ribs",
        description: "ส่วนนี้เป็นส่วน St.Louis Ribs จุดเด่นของส่วนนี้คือรสชาติเข้มข้น ร่อนจากกระดูก",
        price: 180,
        cout: 1,
      }
    ]; //items
  } //constructor


  OpenCartPage() {
    this.navCtrl.push(CartPage)
  }

  insertItem() {

  }

  OpenDetailPage(item) {
    this.navCtrl.push(DetailPage, { item: item })
  }

  /* presentModal() {
     let modal = this.modalCtrl.create(CartPage);
     modal.present();
   } */






} // class
