import { AvailabilityStatus } from '../constants/availability-status';
import { profileDetails } from '../interfaces/profile-details';

export const ProfileDetailsStubs01: profileDetails = {
  firstName: 'Paris',
  lastName: 'S',
  jobTitle: 'Software Engineer at Disney',
  schoolName: 'University of Texas at Arlington',
  city: 'Bellevue',
  state: 'Wahington',
  country: 'United States',
  profileImage: 'assets/profile-pic.jpg',
  availabilityStatus: AvailabilityStatus.ONLINE,
};
