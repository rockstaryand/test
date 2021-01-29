import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipFromComponent } from './components/ship-from/ship-from.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ShipToComponent } from './components/ship-to/ship-to.component';
import { ShipViaComponent } from './components/ship-via/ship-via.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipFromComponent,
    OrderDetailsComponent,
    ShipToComponent,
    ShipViaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
