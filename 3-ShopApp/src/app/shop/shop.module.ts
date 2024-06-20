import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { ModelModule } from "../model/model.module";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports:[ModelModule, BrowserModule, FormsModule],
    declarations:[ShopComponent, NavbarComponent, CartSummaryComponent],
    exports:[ShopComponent]
})

export class ShopModule{}