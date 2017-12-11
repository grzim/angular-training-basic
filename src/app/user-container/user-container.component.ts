import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public filteredUser;
  public usersNames;
  public allUsers;
  public selectedUser$ = new Subject();
  public selectedUsers$: Observable<any>;
  constructor(public usersService: UsersService) {
      this.usersNames = this.usersService.getAllUsers().map(({name}) => name);
      this.allUsers = this.usersService.getAllUsers();
      this.selectedUsers$ = this.selectedUser$.distinctUntilChanged().scan((acc: string[], curr: string) => {
        if (acc.length === 3) {
          acc = [curr, acc[0], acc[1]];
        }
        else {
            acc.push(curr);
        }
        return acc;
      }, []);
  }

  sortFnChange(sortFn) {
    this.filteredUser = this.usersService.getAllUsers().sort(sortFn)[0].name;
  }
  ngOnInit() {
  }

}
