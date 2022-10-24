import { Component } from '@angular/core';
import { profileDetails } from '../../interfaces/profile-details';
import { ProfileDetailsStubs01 } from '../../stubs/profile-details.stub';

@Component({
  selector: 'hacktoberfest2022-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent {
  profileDetails: profileDetails = ProfileDetailsStubs01;
}
