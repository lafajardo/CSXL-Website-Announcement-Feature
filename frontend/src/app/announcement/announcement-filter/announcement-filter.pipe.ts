import { Pipe, PipeTransform } from '@angular/core';
import { AnnouncementModel, AnnouncementState } from '../announcement.model';

@Pipe({
  name: 'announcementFilter'
})
export class AnnouncementFilterPipe implements PipeTransform {
  /** Returns a mapped array of announcements that start with the input string (if search query provided).
   * @param {Observable<AnnouncementModel[]>} announcements: observable list of valid Announcement models
   * @param {String} searchQuery: input string to filter by
   * @returns {Observable<AnnouncementModel[]>}
   */
  transform(
    announcements: AnnouncementModel[],
    searchQuery: String
  ): AnnouncementModel[] {
    // Sort the organizations list alphabetically by name
    announcements = announcements.sort(
      (a: AnnouncementModel, b: AnnouncementModel) => {
        return a.headline.toLowerCase().localeCompare(b.headline.toLowerCase());
      }
    );

    // If a search query is provided, return the organizations that start with the search query.
    if (searchQuery) {
      return announcements.filter((announcement) =>
        announcement.headline.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Otherwise, return the original list.
      return announcements;
    }
  }
}
