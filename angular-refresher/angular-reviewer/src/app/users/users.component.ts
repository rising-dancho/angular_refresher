import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // PROPERTY BINDING
  allowNewUser = false;


  constructor() {
    // DYNAMICALLY CHANGING THE VALUE OF THE CLASS PROPERTY
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
