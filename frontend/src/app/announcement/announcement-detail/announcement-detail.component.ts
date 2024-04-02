import { Component, Input } from '@angular/core';
import { AnnouncementModel } from '../announcement.model';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent {
  @Input() announcements!: AnnouncementModel;
}
