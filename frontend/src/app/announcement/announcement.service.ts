import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AnnouncementModel } from './announcement.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcementClicked = new EventEmitter<any>();
  private announcementsSource = new BehaviorSubject<AnnouncementModel[]>([]);
  announcements$: Observable<AnnouncementModel[]> =
    this.announcementsSource.asObservable();

  constructor(
    protected http: HttpClient,
    public datePipe: DatePipe
  ) {}

  announceClick(eventData: any) {
    this.announcementClicked.emit(eventData);
  }

  getAnnouncements() {
    this.http.get<AnnouncementModel[]>('/api/announcement').subscribe(
      (data) => this.announcementsSource.next(data),
      (error) => console.error('Error fetching announcements', error)
    );
  }

  createAnnouncement(
    announcement: AnnouncementModel
  ): Observable<AnnouncementModel> {
    console.log('hey');
    return this.http.post<AnnouncementModel>('/api/announcement', announcement);
  }

  deleteAnnouncement(id: number) {
    return this.http.delete(`/api/announcement/${id}`);
  }
}
