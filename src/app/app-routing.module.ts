import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopComponent } from './components/e-shop/e-shop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { CartComponent } from './components/cart/cart.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CommandeComponent } from './components/commande/commande.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'mon-compte', component: MonCompteComponent },
  { path: 'cart', component: CartComponent },
  { path: 'e-shop/product/:id', component: SingleProductComponent },
  { path: 'cart/commande', component: CommandeComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
