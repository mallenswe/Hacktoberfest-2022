import { Component } from '@angular/core';
import { profileDetails } from '../../interfaces/profile-details';

@Component({
  selector: 'hacktoberfest2022-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  profileDetails: profileDetails = {
    firstName: 'Paris',
    lastName: 'S',
    jobTitle: 'Software Engineer at Disney',
    schoolName: 'Disney . University of Texas at Arlington',
    city: 'Bellevue',
    state: 'Wahington',
    country: 'United States',
    profileImage: 'assets/profile-pic.jpg',
  };
}
