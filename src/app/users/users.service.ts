import { Injectable } from '@angular/core'

class User {
    constructor(public name: string, public surname: string, public age: number, public proffesion: string) {
    }
}

@Injectable()
export class UsersService {

    private users: Array<User> = [];

    constructor() {
        const adam = new User('adam', 'kowalski', 45, 'it-spec');
        const bogdan = new User('bogdan', 'marianczyk', 45, 'it-spec');
        const ewa = new User('ewa', 'scholarz', 25, 'it-spec');
        const marcin = new User('marcin', 'kowalski', 45, 'it-spec');
        const agata = new User('agata', 'marianczyk', 45, 'it-spec');
        const hela = new User('hela', 'scholarz', 25, 'it-spec');
        this.users.push(adam, bogdan, ewa, marcin, agata, hela);
    }

    addUser(user: User) {
        this.users.push(user);
    }

    getAllUsers() {
        return this.users;
    }

    getOldest() {
        return this.users.sort((a, b) => Number(a.age - b.age))[0];
    }
    getUsersByAge() {
        return this.users.reduce((acc, curr) => {
            acc[curr.age] = acc[curr.age] ? [...acc[curr.age], curr.name] : [curr.name];
            return acc;
        }, {});
    }

}
