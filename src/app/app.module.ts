import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {MessagePage} from '../pages/message/message';
import {LoginPage} from '../pages/login/login';
import {MinePage} from '../pages/mine/mine';
import {ForgetpwdPage} from '../pages/forgetpwd/forgetpwd';
import {ZhucePage}from '../pages/zhuce/zhuce';
import {XieyiPage}from '../pages/xieyi/xieyi';
import {FabuPage}from '../pages/fabu/fabu';
import {HezuoPage}from '../pages/hezuo/hezuo';
import {FabumessagePage}from '../pages/fabumessage/fabumessage';
import {DialoguePage}from '../pages/dialogue/dialogue';
import {SetPage}from '../pages/set/set';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MinePage,
    ForgetpwdPage,
    ZhucePage,
    XieyiPage,
    MessagePage,
    FabuPage,
    HezuoPage,
    FabumessagePage,
    DialoguePage,
    SetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    // ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MinePage,
    ForgetpwdPage,
    ZhucePage,
    XieyiPage,
    MessagePage,
    FabuPage,
    HezuoPage,
    FabumessagePage,
    DialoguePage,
    SetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
