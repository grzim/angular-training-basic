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
  constructor(public usersService: UsersService) {
      this.usersNames = this.usersService.getAllUsers().map(({name}) => name);
  }

  sortFnChange(sortFn) {
    this.filteredUser = this.usersService.getAllUsers().sort(sortFn)[0].name;
  }
  ngOnInit() {
  }

}
