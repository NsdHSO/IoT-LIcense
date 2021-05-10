import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplayComponent } from './user-display/user-display.component';
import {MatCardModule} from '@angular/material/card'; 
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    UserDisplayComponent,
    ProfileComponent,
    PostComponent,
    MessagesComponent
  ],
  imports: [
    TextFieldModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MatCardModule
  ],
  exports:[
    UserDisplayComponent
  ]
})
export class UserModule { }
