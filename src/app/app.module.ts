import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { HistoryPage } from '../pages/history/history';
import { CollectAmountPage } from '../pages/collect-amount/collect-amount';       
import { ProfilePage } from '../pages/profile/profile';
import { CollectionhistoryPage } from '../pages/collectionhistory/collectionhistory';
import { DayEndCollectionPage } from '../pages/day-end-collection/day-end-collection';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    HistoryPage,
    CollectAmountPage,
    ProfilePage,
    CollectionhistoryPage,
    DayEndCollectionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    HistoryPage,
    CollectAmountPage,
    ProfilePage,
    CollectionhistoryPage,
    DayEndCollectionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
