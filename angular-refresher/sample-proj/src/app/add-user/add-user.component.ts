import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName: string = "";

  // CUSTOM EVENT: that would pass the something from the child to the parent through the
  @Output() userAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded() {
    this.userAdded.emit(this.userName);
  }
}