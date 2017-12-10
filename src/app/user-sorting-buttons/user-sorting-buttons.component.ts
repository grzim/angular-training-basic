import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-user-sorting-buttons',
  templateUrl: './user-sorting-buttons.component.html',
  styleUrls: ['./user-sorting-buttons.component.css']
})
export class UserSortingButtonsComponent implements OnInit {

  @Output() sortFn = new EventEmitter<Function>();
  constructor() { }

  ngOnInit() {
  }

    sortUsersBy(propName: string) {
        const sortFn = (a, b) => a[propName] > b[propName] ? 1 : -1;
        this.sortFn.emit(sortFn);
    }
}
