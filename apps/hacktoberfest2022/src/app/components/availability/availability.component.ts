import { Component, Input } from '@angular/core';
import {
  AvailabilityStatus,
  AvailabilityStatusColors,
} from '../../constants/availability-status';

@Component({
  selector: 'hacktoberfest2022-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
})
export class AvailabilityComponent {
  @Input() availabilityStatus!: AvailabilityStatus;
  AvailabilityStatus = AvailabilityStatus;
  AvailabilityStatusColors = AvailabilityStatusColors;
}
