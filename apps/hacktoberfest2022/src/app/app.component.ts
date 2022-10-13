import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@hacktoberfest2022/api-interfaces';

@Component({
  selector: 'hacktoberfest2022-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private router: Router) {}

  goToProfile(): void {
    console.log('Navigate to Profile Page.');
    this.router.navigate(['profile', 1]);
  }
}
