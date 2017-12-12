import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserSortingButtonsComponent } from './user-sorting-buttons/user-sorting-buttons.component';
import { SelectedUsersComponent } from './selected-users/selected-users.component';
import 'rxjs/';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'users', component: UserContainerComponent }
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    UserContainerComponent,
    UserSortingButtonsComponent,
    SelectedUsersComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
      routing
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
