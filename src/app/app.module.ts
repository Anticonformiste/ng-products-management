import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductModule } from './products/product.module';
// A decorator with a metadata object to configure the appModule(dependency injection)
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]),
    ProductModule
  ],
  declarations: [AppComponent, WelcomeComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
