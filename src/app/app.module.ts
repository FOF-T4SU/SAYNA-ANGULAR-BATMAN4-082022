import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarNavComponent } from './components/bar-nav/bar-nav.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    EShopComponent,
    MonCompteComponent,
    FooterComponent,
    BarNavComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
