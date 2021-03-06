import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { FirstPage } from '../pages/first/first';
import { CreatePage } from '../pages/create/create';
import { CartPage } from '../pages/cart/cart';
import { PorkPage } from '../pages/pork/pork';
import { DetailPage } from '../pages/detail/detail';
import { FollowPage } from '../pages/follow/follow';
import { RicePage } from '../pages/rice/rice';
import { AddPage } from '../pages/add/add';
import { MyselfPage } from '../pages/myself/myself';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstPage,
    CreatePage,
    CartPage,
    PorkPage,
    DetailPage,
    FollowPage,
    RicePage,
    AddPage,
    MyselfPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FirstPage,
    CreatePage,
    CartPage,
    PorkPage,
    DetailPage,
    FollowPage,
    RicePage,
    AddPage,
    MyselfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
