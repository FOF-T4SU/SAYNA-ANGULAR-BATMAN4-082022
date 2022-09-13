import { NgModule, LOCALE_ID } from '@angular/core';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartComponent } from './components/cart/cart.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    EShopComponent,
    MonCompteComponent,
    FooterComponent,
    BarNavComponent,
    NotFoundPageComponent,
    CartComponent,
    AsideComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    registerLocaleData(fr.default)
  }
}
