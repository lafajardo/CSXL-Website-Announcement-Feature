import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.css']
})
export class AnnouncementPageComponent {
  public static Route = {
    path: '',
    component: AnnouncementPageComponent
  };
}
