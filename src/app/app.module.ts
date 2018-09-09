import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {PagesModule} from './pages/pages.module';
import {LoginFormModule} from './login-form/login-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    PagesModule,
    LoginFormModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
