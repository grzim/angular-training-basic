import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-selected-users',
  templateUrl: './selected-users.component.html',
  styleUrls: ['./selected-users.component.css']
})
export class SelectedUsersComponent implements OnInit {

  @Input() selectedUsers$;
  constructor() { }

  ngOnInit() {
  }

}
