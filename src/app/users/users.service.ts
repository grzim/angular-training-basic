import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

export class User {
    constructor(public name: string, public surname: string, public age: number, public proffesion: string) {
    }
}

@Injectable()
export class UsersService {

    // inputs
    addNewUser = new Subject();
    // outputs
    users$: Observable<Array<User>>;
    usersByAge$: Observable<{number: User[]}>;
    oldestUser$: Observable<User>;

    constructor() {
        const adam = new User('adam', 'kowalski', 45, 'it-spec');
        const bogdan = new User('bogdan', 'marianczyk', 45, 'it-spec');
        const ewa = new User('ewa', 'scholarz', 25, 'it-spec');
        const marcin = new User('marcin', 'kowalski', 45, 'it-spec');
        const agata = new User('agata', 'marianczyk', 45, 'it-spec');
        const hela = new User('hela', 'scholarz', 25, 'it-spec');
        const initUsers = [adam, bogdan, ewa, marcin, agata, hela];

        const add = (user) => (users) => [...users, user];
       // const remove = (name) => (users) => users.filter(user => user.name !== name);
        this.users$ = this.addNewUser.mapTo(add)
            .startWith((x) => x)
            .scan((acc: Array<User>, fn: Function) => fn(acc), initUsers);
        this.usersByAge$ = this.users$.map(users => users.reduce((acc, curr) => {
            acc[curr.age] = acc[curr.age] ? [...acc[curr.age], curr.name] : [curr.name];
            return acc;
        }, {}));
        this.oldestUser$ = this.users$.map(users => users.sort((a, b) => a.age - b.age)[0]);
    }

}
