import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../users/users.service'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-user-container',
    templateUrl: './user-container.component.html',
    styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

    public filteredUser
    public usersNames$
    public filteredUsers$: Observable<Array<User>>
    public users$
    public allUsers
    public sortFn = new Subject()
    public selectedUser$ = new Subject()
    public selectedUsers$: Observable<string[]>

    constructor(public usersService: UsersService) {
        this.users$ = this.usersService.users$;
        this.usersNames$ = this.usersService.users$.map(users => users.map(({name}) => name));
        this.filteredUsers$ = this.usersService.users$.combineLatest(this.sortFn,
            (users: Array<User>, sortFn: any) => users.sort(sortFn))
            .do(console.log)

        this.selectedUsers$ = this.selectedUser$
            .distinctUntilChanged()
            .scan((acc: string[], curr: string) => {
                if (acc.length === 3) {
                    acc = [curr, acc[0], acc[1]]
                }
                else {
                    acc.push(curr)
                }
                return acc
            }, [])
    }

    ngOnInit() {
    }

}
