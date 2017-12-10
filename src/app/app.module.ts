import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UserDisplayComponent } from './user-display/user-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
