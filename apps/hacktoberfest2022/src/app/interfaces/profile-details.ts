import { AvailabilityStatus } from '../constants/availability-status';

export interface profileDetails {
  firstName: string;
  lastName: string;
  jobTitle: string;
  schoolName: string;
  city: string;
  state: string;
  country: string;
  profileImage: string;
  availabilityStatus: AvailabilityStatus;
}
