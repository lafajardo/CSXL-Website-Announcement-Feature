
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
      headline: 'a',
      synopsis: 'a',
      main_story: 'a',
      author: 'a',
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
      headline: 'a',
      synopsis: 'a',
      main_story: 'a',
      author: 'a',
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
  }

  public static Route = {
    path: '',
    component: AnnouncementPageComponent
  };
}
