import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['users.component.css'],
})

export class UsersComponent implements OnInit {
    // PROPERTY BINDING : CSS
    allowNewUser = false; // this is a property and you want to bind it to the css property to dynamically control its value
    //    console.log(this.allowNewUser)  // IMPORTANT: class body is only for declarations! if you want to run console.log() .. run it inside a method

    // variable for EVENT BINDING : JAVASCRIPT
    userCreatedStatus = 'No User is Created';

    // Constructor whenever this component is create this contructor will be executed
    constructor() {
        console.log(this.allowNewUser)
        setTimeout(() => {
            // enable the button: by setting the disabled = false
            var output = this.allowNewUser = true
            console.log(this.allowNewUser)

            return output;
        }, 3000)
    }

    // METHOD FOR EVENT BINDING:
    changeUserCreatedStatus() {
        this.userCreatedStatus = 'User is Created';
        setTimeout(() => {
            this.userCreatedStatus = 'No User is Created';
        }, 3000);
    }

    ngOnInit(): void { }

}