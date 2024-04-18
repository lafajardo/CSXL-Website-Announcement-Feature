import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AnnouncementModel, AnnouncementState } from '../announcement.model';
import { min } from 'rxjs';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-new-announcement-form',
  templateUrl: './new-announcement-form.component.html',
  styleUrls: ['./new-announcement-form.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NewAnnouncementFormComponent {
  constructor(
    private router: Router,
    private announcementService: AnnouncementService
  ) {}

  announcementForm = new FormGroup({
    headline: new FormControl(''),
    synopsis: new FormControl(''),
    mainStory: new FormControl(''),
    author: new FormControl(''),
    organization: new FormControl(''),
    slug: new FormControl(''),
    image_url: new FormControl('')
  });

  goToNewAnnouncement(): void {
    this.router.navigate(['/new-announcement']);
  }

  onSubmit(): void {
    if (this.announcementForm.valid) {
      console.log('Form Data:', this.announcementForm.value);

      const announcement: AnnouncementModel = {
        id: 5,
        headline: this.announcementForm!.value.headline as string,
        synopsis: this.announcementForm!.value.synopsis as string,
        main_story: this.announcementForm!.value.mainStory as string,
        author: this.announcementForm!.value.author as string,
        organization: this.announcementForm!.value.organization as string,
        state: AnnouncementState.PUBLISHED, // Enum, when sent to backend, cannot be processed properly, must send number,
        // probly use logic to handle
        slug: this.announcementForm!.value.slug as string,
        image_url: this.announcementForm!.value.image_url as string,
        publish_date: new Date(),
        modification_date: new Date()
      };
      console.log('Form Data:', announcement);
      this.announcementService.createAnnouncement(announcement).subscribe(
        (response) => console.log('Posted successfully', response),
        (error) => console.error('Error posting', error)
      );
    }
    this.router.navigate(['/announcements']);
  }

  cancel(): void {
    this.router.navigate(['/announcements']);
  }
}
