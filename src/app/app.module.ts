import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import appRoutes from './app.routing';
import { AppComponent } from './app.component';
import { Navigation } from './modules/navigation.module';
import {
  AuthInterceptorService,
  AuthServicesService,
} from './shared/utils/services/.services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Navigation,
    FormsModule,
    DashboardModule,

  ],
  providers: [
    AuthServicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
