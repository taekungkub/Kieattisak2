import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {



   public form                   : FormGroup;
   public technologyName         : any;
   public technologyDescription  : any;
   public technologyCost         : any;
   public technologyPrice        : any;

   public isEdited               : boolean = false;
   public hideForm               : boolean = false;
   public pageTitle              : string;
   public recordID               : any      = null;


   private baseURI               : string  = "http://localhost/ribsDB/";

   constructor(public navCtrl    : NavController,
               public http       : HttpClient,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public toastCtrl  : ToastController)
   {

      this.form = fb.group({
         "name"                  : ["", Validators.required],
         "description"           : ["", Validators.required],
         "cost"                  : ["", Validators.required],
         "price"                 : ["", Validators.required]
      });
   }


   ionViewWillEnter() : void
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Amend entry';
      }
      else
      {
         this.isEdited      = false;
         this.pageTitle     = 'Create entry';
      }
   }


   selectEntry(item : any) : void
   {
      this.technologyName        = item.name;
      this.technologyDescription = item.description;
      this.technologyCost        = item.cost;
      this.technologyPrice       = item.price;
      this.recordID              = item.id;
   }



   createEntry(name : string, description : string, cost : number, price : number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "name" : name, "description" : description,
                                                      "cost": cost, "price": price},
          url       : any      	= this.baseURI + "manage-data.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         this.hideForm   = true;
         this.sendNotification(`สำเร็จแล้ว: ${name} ได้เพิ่มเรียบร้อยแล้ว`);
      },
      (error : any) =>
      {
         this.sendNotification(`สำเร็จแล้ว: ${name} ได้เพิ่มเรียบร้อยแล้ว`);
      });
   }



   updateEntry(name : string, description : string, cost : number, price : number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "update", "name" : name, "description" : description, "cost": cost, "price": price ,"recordID" : this.recordID, },
          url       : any      	= this.baseURI + "manage-data.php";

      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data =>
      {
         // If the request was successful notify the user
         this.hideForm  =  true;
         this.sendNotification(`สำเร็จแล้ว: ${name} ถูกแก้ไขเรียบร้อยแล้ว`);
      },
      (error : any) =>
      {
         this.sendNotification(`สำเร็จแล้ว: ${name} ถูกแก้ไขเรียบร้อยแล้ว`);
      });
   }



   deleteEntry() : void
   {
      let name      : string 	= this.form.controls["name"].value,
          headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "delete", "recordID" : this.recordID},
          url       : any      	= this.baseURI + "manage-data.php";

      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data =>
      {
         this.hideForm     = true;
         this.sendNotification(`สำเร็จแล้ว : ${name} ได้ถูกลบไปแล้ว`);
         this.navCtrl.push(HomePage);
      },
      (error : any) =>
      {
         this.sendNotification(`สำเร็จแล้ว : ${name} ได้ถูกลบไปแล้ว`);
         this.navCtrl.push(HomePage);
      });
   }


   saveEntry() : void
   {
      let name          : string = this.form.controls["name"].value,
          description   : string    = this.form.controls["description"].value,
          cost          : number    = this.form.controls["cost"].value,
          price         : number    = this.form.controls["price"].value;

      if(this.isEdited)
      {
         this.updateEntry(name, description,cost , price);
      }
      else
      {
         this.createEntry(name, description,cost , price);
      }
      this.navCtrl.push(HomePage);
   }

   resetFields() : void
   {
      this.technologyName           = "";
      this.technologyDescription    = "";
      this.technologyCost    = "";
      this.technologyPrice  = "";
   }


   sendNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }



}