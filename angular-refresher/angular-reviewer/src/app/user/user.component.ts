import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number = 10;
  userStatus: string = 'Offline';


  constructor() { }

  ngOnInit(): void {
  }


  getUserStatus() {
    return this.userStatus;
  }

}
