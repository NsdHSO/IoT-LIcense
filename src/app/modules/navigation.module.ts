import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import navigation from './navigation.routing';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    UserModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forChild(navigation),
  ],
  exports: [UserModule, AuthModule],
})
export class Navigation {}
