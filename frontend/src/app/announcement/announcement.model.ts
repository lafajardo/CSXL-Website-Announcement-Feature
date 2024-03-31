import { Organization } from '../organization/organization.model';
import { PublicProfile } from '../profile/profile.service';

export interface AnnouncementModel {
  id: number;
  headline: string;
  synopsis: string;
  main_story: string;
  author: string | PublicProfile;
  organization: string | Organization | null;
  organization_id: number | null;
  state: AnnouncementState;
  slug: string;
  image_url: string[] | null;
  publish_date: Date;
  modification_date: Date; // We may not need two dates
}

export enum AnnouncementState {
  PUBLISHED,
  DRAFT,
  ARCHIVED
}
