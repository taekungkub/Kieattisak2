import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {


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

  Login() {

    console.log("Name : ", this.username, "Password", this.password);

    if ((this.username == null) && (this.password == null)) {
      this.noteAlert = "กรุณาใส่ Username หรือ Password ค่ะ"
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: this.noteAlert,
        buttons: ['OK']
      });
      alert.present();
    }


  } //BMI





} 
