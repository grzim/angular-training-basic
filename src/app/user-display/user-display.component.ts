import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  public firstUser;
  public firstFromSorted = '';
  constructor(private usersService: UsersService) {
    this.firstUser = this.usersService.getAllUsers()[0].name;
  }
  sortUsersBy(propName: string) {
    const sortFn = (a, b) => a[propName] > b[propName] ? 1 : -1;
    this.firstFromSorted = this.usersService.getAllUsers().sort(sortFn)[0].name;
  }

  ngOnInit() {
  }

}
