import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { CardProduitComponent } from './card-produit/card-produit.component';
import { ViewProduitsComponent } from "./view-produits/view-produits.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListProduitsComponent,
    CardProduitComponent,
    ViewProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
