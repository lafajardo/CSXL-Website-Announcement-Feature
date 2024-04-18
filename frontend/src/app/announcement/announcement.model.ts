import { Organization } from '../organization/organization.model';
import { PublicProfile } from '../profile/profile.service';

export interface AnnouncementModel {
  id: number;
  headline: string;
  synopsis: string;
  main_story: string;
  author: string;
  organization: string | null;
  state: AnnouncementState;
  slug: string;
  image_url: string;
  publish_date: Date | null;
  modification_date: Date; // We may not need two dates
}

export enum AnnouncementState {
  PUBLISHED,
  DRAFT,
  ARCHIVED
}
