import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcementClicked = new EventEmitter<any>();

  constructor() {}

  announceClick(eventData: any) {
    this.announcementClicked.emit(eventData);
  }
}
