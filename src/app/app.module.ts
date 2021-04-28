import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationService } from './animation/animations.services';
import { HeaderComponent } from './common/header/header.component';
import { InnerHeaderComponent } from './common/inner-header/inner-header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    InnerHeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent],
  providers: [
    NavigationService,
  ],
})
export class AppModule { }
