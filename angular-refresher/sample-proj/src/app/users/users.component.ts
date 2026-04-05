import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: string = '';
  usersList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded() {
    this.usersList.push(this.userName);
  }

}
