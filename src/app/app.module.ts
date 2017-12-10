import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserSortingButtonsComponent } from './user-sorting-buttons/user-sorting-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UserContainerComponent,
    UserSortingButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
