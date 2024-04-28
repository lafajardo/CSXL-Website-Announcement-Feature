import { Component, OnInit } from '@angular/core';
import { AnnouncementModel, AnnouncementState } from '../announcement.model';
import { AnnouncementCardComponent } from '../widget/announcement-card/announcement-card.component';
import { Observable, Subscription } from 'rxjs';
import { AnnouncementService } from '../announcement.service';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/permission.service';

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
  public detailIdx: number = 0;
  adminPermission$!: Observable<boolean>;

  private announcementSubscription: Subscription;

  constructor(
    private announcementService: AnnouncementService,
    private router: Router,
    private permission: PermissionService
  ) {
    this.announcementSubscription =
      this.announcementService.announcementClicked.subscribe((event) => {
        console.log('Event received:', event);
        this.detailIdx = event;
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
    this.adminPermission$ = this.permission.check(
      'organization.announcements.*',
      `organization/${this.announcementService}`
    );
    this.announcementService.announcements$.subscribe((data) => {
      this.announcements = data;
      if (this.announcements.length > 0) {
        this.detailIdx = this.announcements[0].id;
      }
    });
    this.announcementService.getAnnouncements();
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

  deleteAnnouncement() {
    this.dataSubscription.add(
      this.announcementService.deleteAnnouncement(this.detailIdx).subscribe(
        (data) => {
          console.log('success!');
          this.announcementService.getAnnouncements();
        },
        (error) => {
          console.error('Failed to get announcements:', error);
        }
      )
    );
  }

  editAnnouncement() {}
}
