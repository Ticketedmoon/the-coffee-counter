import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainBodyComponent } from './components/about-body-top/main-body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrinciplesBodyBottomComponent } from './components/principles-body-bottom/principles-body-bottom.component';
import { HeaderImageContextComponent } from './components/header-image-context/header-image-context.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainBodyComponent,
    FooterComponent,
    PrinciplesBodyBottomComponent,
    HeaderImageContextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
