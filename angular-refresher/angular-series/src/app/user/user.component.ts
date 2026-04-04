import { Component } from "@angular/core";

// decorator : an interface that takes an object
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent {
    // DATA BINDING (aka String Interpolation): [PROPS] how the html and the typescript file communicates the data between them
    userID: number = 10; // this is a property
    userStatus: string; // this is a property

    constructor() {
        // make the value deterministic and stop recalling the function Math.random()
        // explanation: https://chatgpt.com/share/69d0fe99-0d48-8324-b487-00fee07d9caf
        const rand = Math.random();

        this.userStatus = rand > 0.5 ? 'Online' : 'Offline';
        console.log('random number: ' + rand + ' is it greater than 0.5? ' + this.userStatus);
    }

    // YOU CAN ACTUALLY ALSO CALL METHODS IN THE DATA BINDING
    getUserStatus() {
        return this.userStatus;
    }


}