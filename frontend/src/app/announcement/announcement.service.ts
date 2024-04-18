import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AnnouncementModel } from './announcement.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcementClicked = new EventEmitter<any>();

  constructor(
    protected http: HttpClient,
    public datePipe: DatePipe
  ) {}

  announceClick(eventData: any) {
    this.announcementClicked.emit(eventData);
  }

  getAnnouncements() {
    return this.http.get<AnnouncementModel[]>('/api/announcement');
  }

  createAnnouncement(
    announcement: AnnouncementModel
  ): Observable<AnnouncementModel> {
    console.log('hey');
    return this.http.post<AnnouncementModel>('/api/announcement', announcement);
  }
}
