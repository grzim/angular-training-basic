import { Component } from '@angular/core';
import { UsersService } from './users/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(userService: UsersService) {
    console.log(
        userService.getAllUsers(),
        userService.getOldest(),
        userService.getUsersByAge()
    );
  }
}
