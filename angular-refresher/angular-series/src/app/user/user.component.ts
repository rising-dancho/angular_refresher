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
    userStatus: String = 'Offline'; // this is a property

    // YOU CAN ACTUALLY ALSO CALL METHODS IN THE DATA BINDING
    getUserStatus() {
        return this.userStatus;
    }

    
}