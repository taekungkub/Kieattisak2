import { Component, ViewChild ,} from '@angular/core';
import { Platform, Nav, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';



import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePage } from '../pages/create/create';
import { CartPage } from '../pages/cart/cart';
import { FollowPage } from '../pages/follow/follow';

import { ContactPage } from '../pages/contact/contact';
import { AddPage } from '../pages/add/add';
import { NavController } from 'ionic-angular/navigation/nav-controller';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;
  page: Array<{ title: string, component: any, icon: String }>


  constructor(platform: Platform, public statusBar: StatusBar, splashScreen: SplashScreen, 
                private menu: MenuController ,public http   : HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      splashScreen.hide();
      this.statusBar.show()
    });

    this.page = [

      { title: 'เข้าสู่ระบบ', icon: 'md-person', component: ContactPage },
      { title: 'ติดตาม', icon: 'md-boat', component: FollowPage },
      { title: 'ตะกร้าสินค้า', icon: 'md-cart', component: CartPage },
      { title: 'เพิ่มรายการอาหาร', icon: 'md-add', component: AddPage },
    ]
  }//constructor
  goPage(page) {
    this.nav.push(page.component);
    this.menu.toggle();
  }


  public items : Array<any> = [];

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
     this.nav.push(AddPage);
  }


}
