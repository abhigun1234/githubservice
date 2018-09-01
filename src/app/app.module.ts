import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { MenuofthedayComponent } from './menuoftheday/menuoftheday.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    MenuofthedayComponent,
    ShowmenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [HttpClientModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
