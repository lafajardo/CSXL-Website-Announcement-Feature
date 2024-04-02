import { Component, OnInit } from '@angular/core';
import { AnnouncementModel, AnnouncementState } from '../announcement.model';
import { AnnouncementCardComponent } from '../widget/announcement-card/announcement-card.component';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent implements OnInit {
  public announcements: AnnouncementModel[] = [];

  ngOnInit() {
    const newConst: AnnouncementModel = {
      id: 0,
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
    const newConst2: AnnouncementModel = {
      id: 0,
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
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
    this.announcements.push(newConst);
    this.announcements.push(newConst2);
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
}
