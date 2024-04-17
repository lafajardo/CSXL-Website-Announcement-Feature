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
  public announcements: AnnouncementModel[] = [];
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
        this.detailDisplay = event;
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.announcementSubscription.unsubscribe();
  }

  public static giveAnnouncement(): AnnouncementModel {
    const newConst: AnnouncementModel = {
      id: AnnouncementPageComponent.idx,
      headline: 'Legit Announcement',
      synopsis: 'Trust me Bro',
      main_story:
        'Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. ',
      author: 'Putin',
      organization: null,
      organization_id: 0,
      state: AnnouncementState.PUBLISHED,
      slug: 'a',
      image_url: null,
      publish_date: new Date(),
      modification_date: new Date()
    };
    AnnouncementPageComponent.idx += 1;
    return newConst;
  }

  public static giveAnnouncement2(): AnnouncementModel {
    const newConst: AnnouncementModel = {
      id: AnnouncementPageComponent.idx,
      headline: 'Hacker Announcement',
      synopsis:
        'Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. ',
      main_story: 'a',
      author: 'Hecker',
      organization: null,
      organization_id: 0,
      state: AnnouncementState.PUBLISHED,
      slug: 'a',
      image_url: null,
      publish_date: new Date(),
      modification_date: new Date()
    };
    AnnouncementPageComponent.idx += 1;
    return newConst;
  }

  ngOnInit() {
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement());
    this.announcements.push(AnnouncementPageComponent.giveAnnouncement2());
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
