import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserSortingButtonsComponent } from './user-sorting-buttons/user-sorting-buttons.component';
import { SelectedUsersComponent } from './selected-users/selected-users.component';
import 'rxjs/';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UserContainerComponent,
    UserSortingButtonsComponent,
    SelectedUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
