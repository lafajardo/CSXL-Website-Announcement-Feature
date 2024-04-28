import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AnnouncementModel } from '../../announcement.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnnouncementService } from '../../announcement.service';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent {
  @Input() announcement!: AnnouncementModel;

  constructor(private announcementService: AnnouncementService) {}

  announcementCardClicked() {
    this.announcementService.announceClick(this.announcement.id);
  }
}
