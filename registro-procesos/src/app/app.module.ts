import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarProcesoComponent } from './components/registrar-proceso/registrar-proceso.component';
import { ListarComponent } from './components/listar/listar.component';

import { APP_ROUTING } from './router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarProcesoComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
