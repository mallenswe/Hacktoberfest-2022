import { Component } from '@angular/core';
import { profileDetails } from '../../interfaces/profile-details';
import { ProfileDetailsStubs01 } from '../../stubs/profile-details.stub';

@Component({
  selector: 'hacktoberfest2022-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent {
  profileDetails: profileDetails = ProfileDetailsStubs01;
}
