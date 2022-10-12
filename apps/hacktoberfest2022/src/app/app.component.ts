import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, UserName } from '@hacktoberfest2022/api-interfaces';

@Component({
  selector: 'hacktoberfest2022-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  userName$ = this.http.get<UserName>('/api/users/username');

  isUserNameShowing = false;

  constructor(private http: HttpClient) {}

  showUserName(): void {
    this.isUserNameShowing = true;
  }

  hideUserName(): void {
    this.isUserNameShowing = false;
  }
}
