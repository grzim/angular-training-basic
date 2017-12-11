import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public filteredUser;
  public usersNames;
  public allUsers;
  constructor(public usersService: UsersService) {
      this.usersNames = this.usersService.getAllUsers().map(({name}) => name);
      this.allUsers = this.usersService.getAllUsers();
  }

  sortFnChange(sortFn) {
    this.filteredUser = this.usersService.getAllUsers().sort(sortFn)[0].name;
  }
  ngOnInit() {
  }

}
