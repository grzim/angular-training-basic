import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  @Input() filteredUser: string;
  @Input() usersNames: Array<string>;
  @Output() selectUser = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

}
