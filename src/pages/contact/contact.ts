import { Component } from '@angular/core';
import { NavController, AlertController , LoadingController } from 'ionic-angular';

import { CreatePage } from '../create/create';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public User: {
    name: String;
    surname: String;
    email: String;
    tel: String;
  }
  public backgroundImage = 'assets/imgs/BackgroundLogin.jpg';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
               public loadingCtrl: LoadingController,) {


  }


  CreateAccount() {
    console.log("ใช้ได้")
    this.navCtrl.push(CreatePage);
  }

  username:any;
  password: any;

  name: any;
  surname: any;
  email: any;
  tel: any;

  note: any;
  noteAlert: any;

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    }); 

    if ((this.username == null) && (this.password == null)) {
    this.noteAlert = "กรุณาใส่ Username หรือ Password ค่ะ"
    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'พบข้อผิดพลาด',
        subTitle: this.noteAlert,
        buttons: ['OK']
      });
      alert.present();
    });

    loading.present();

  }
}


} 
