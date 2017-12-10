import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public filteredUser;
  public firstUser;
  constructor(public usersService: UsersService) {
      this.firstUser = this.usersService.getAllUsers()[0].name;
      console.log(this.firstUser  )
  }

  sortFnChange(sortFn) {
    this.filteredUser = this.usersService.getAllUsers().sort(sortFn)[0].name;
    console.log(this.filteredUser)
  }
  ngOnInit() {
  }

}
