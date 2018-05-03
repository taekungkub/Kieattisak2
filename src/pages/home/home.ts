import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { CartPage } from '../cart/cart';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items : Array<any> = [];

  itemFirst = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              public http   : HttpClient) {
    this.itemFirst = [
      {
        id: 1,
        image: "1.png",
        name: "ซี่โครงหมูบาร์บีคิว",
        description: "สูตร Country รสชาติที่คนไทยคุ้นเคย รสชาติเผ็ดจี๊ดจ๊าด อร่อยจนน้ำตาไหล ยิ่งทานกับน้ำจิ้มยิ่งแซ่บอย่าบอกใคร บอกคำเดียวสำหรับคนชอบทานเผ็ด",
        price: 250,
        cost: 1,
      },
      {
        id: 2,
        image: "2.jpg",
        name: "ซี่โครงหมูบาร์บีคิว อบน้ำผึ้ง",
        description: "สูตรลับพิเศษที่ทำมานานนับ 30 ปีรสชาติกลมกล่อมเป็นเอกลักษณ์ เนื้อหนานุ่ม น้ำหมักซึมเข้าถึงตัวเนื้อ มีมันแทรกกำลังดี กระดูกอ่อนแทะอร่อย",
        price: 610,
        cost: 1,
      },
      {
        id: 3,
        image: "3.png",
        name: "ซี่โครงหมูบาร์บีคิว รสปาปิก้า",
        description: "ซี่โครงหมูบาร์บีคิวส่วนซี่โครงอ่อน รสปาปิก้า (Paprika BBQ Baby Back Ribs)  ผสมผสานรสชาติอย่างลงตัวโดยมีความเผ็ดร้อนเล็กน้อย",
        price: 190,
        cost: 1,
      },
      {
        id: 4,
        image: "4.png",
        name: "ซี่โครงหมู American",
        description: "สไตล์ซี่โครงหมูอบBBQดั้งเดิม สไตล์อเมริกันมีกลิ่นและรสของมัสตาร์ดแตะปลายลิ้นและจมูกเล็กน้อย",
        price: 190,
        cost: 1,
      },
      {
        id: 5,
        image: "11.jpeg",
        name: "ซี่โครงสแปร์ริบส์เป็นแผ่นส่วน St.Louis Ribs",
        description: "ส่วนนี้เป็นส่วน St.Louis Ribs จุดเด่นของส่วนนี้คือรสชาติเข้มข้น ร่อนจากกระดูก",
        price: 180,
        cost: 1,
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

   ionViewWillEnter() : void
   {
      this.load();
   }
   load() : void
   {
      this.http
      .get('http://localhost/ribsDB/retrieve-data.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

   addEntry() : void
   {
      this.navCtrl.push(AddPage);
   }

   viewEntry(param : any) : void
   {
      this.navCtrl.push(AddPage, param);
   }

   







} // class
