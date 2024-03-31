import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { RouterModule } from '@angular/router';
import { AnnouncementCardComponent } from './widget/announcement-card/announcement-card.component';

@NgModule({
  declarations: [AnnouncementPageComponent, AnnouncementCardComponent],


  imports: [CommonModule, AnnouncementRoutingModule, RouterModule]
})
export class AnnouncementModule {}
