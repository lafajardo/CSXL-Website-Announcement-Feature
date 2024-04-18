import { Component, OnInit } from '@angular/core';
import { AnnouncementModel, AnnouncementState } from '../announcement.model';
import { AnnouncementCardComponent } from '../widget/announcement-card/announcement-card.component';
import { Subscription } from 'rxjs';
import { AnnouncementService } from '../announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent implements OnInit {
  public announcements!: AnnouncementModel[];
  private dataSubscription: Subscription = new Subscription();
  public static idx: number = 0;
  public detailDisplay: number = 0;

  private announcementSubscription: Subscription;

  constructor(
    private announcementService: AnnouncementService,
    private router: Router
  ) {
    this.announcementSubscription =
      this.announcementService.announcementClicked.subscribe((event) => {
        console.log('Event received:', event);
        for (let i = 0; i < this.announcements.length; i++) {
          if (this.announcements[i].id === event) {
            this.detailDisplay = i;
            break;
          }
        }
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.announcementSubscription.unsubscribe();
  }

  ngOnInit() {
    this.dataSubscription.add(
      this.announcementService.getAnnouncements().subscribe(
        (data) => {
          this.announcements = data;
        },
        (error) => {
          console.error('Failed to get announcements:', error);
        }
      )
    );
  }

  public static Route = {
    path: '',
    component: AnnouncementPageComponent
  };

  public static transformDate(date: Date): string {
    let result: string;
    let weekday: string;
    let day: string;
    let month: string;
    let year: string;

    date.getDate();
    return 'a';
  }

  goToNewAnnouncement() {
    this.router.navigate(['/new-announcement']);
  }
}
