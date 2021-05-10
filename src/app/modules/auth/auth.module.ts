import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFromComponent } from './auth-from/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterFromComponent, LoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RegisterFromComponent],
})
export class AuthModule {}
