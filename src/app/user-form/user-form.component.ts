import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() addUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
