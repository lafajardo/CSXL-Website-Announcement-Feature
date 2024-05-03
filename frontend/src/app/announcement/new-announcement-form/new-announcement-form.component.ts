import { Component, OnInit } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
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
export class NewAnnouncementFormComponent implements OnInit {
  announcementForm: FormGroup;
  isEditMode = false;
  currentAnnouncementId: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private announcementService: AnnouncementService
  ) {
    this.announcementForm = new FormGroup({
      headline: new FormControl('', Validators.required),
      synopsis: new FormControl('', Validators.required),
      main_story: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      organization: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      image_url: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: any }) => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.currentAnnouncementId = +id;
        this.loadAnnouncement(this.currentAnnouncementId);
      }
    });
  }

  private loadAnnouncement(id: number): void {
    this.announcementService.getAnnouncementById(id).subscribe(
      (announcement) => {
        console.log('Received announcement:', announcement);
        this.announcementForm.patchValue(announcement);
      },
      (error) => console.error('Error fetching announcement', error)
    );
  }

  onSubmit(): void {
    if (this.announcementForm.invalid) {
      return;
    }
    const announcement: AnnouncementModel = this.announcementForm.value;
    if (this.isEditMode && this.currentAnnouncementId) {
      const announcement: AnnouncementModel = {
        id: 100,
        headline: this.announcementForm!.value.headline as string,
        synopsis: this.announcementForm!.value.synopsis as string,
        main_story: this.announcementForm!.value.main_story as string,
        author: this.announcementForm!.value.author as string,
        organization: this.announcementForm!.value.organization as string,
        state: 0, // Enum, when sent to backend, cannot be processed properly, must send number,
        // probly use logic to handle
        slug: this.announcementForm!.value.slug as string,
        image_url: this.announcementForm!.value.image_url as string,
        publish_date: new Date(),
        modification_date: new Date()
      };
      this.announcementService
        .updateAnnouncement(this.currentAnnouncementId, announcement)
        .subscribe(
          () => this.router.navigate(['/announcements']),
          (error) => console.error('Error updating announcement', error)
        );
    } else {
      const announcement: AnnouncementModel = {
        id: 100,
        headline: this.announcementForm!.value.headline as string,
        synopsis: this.announcementForm!.value.synopsis as string,
        main_story: this.announcementForm!.value.main_story as string,
        author: this.announcementForm!.value.author as string,
        organization: this.announcementForm!.value.organization as string,
        state: 0, // Enum, when sent to backend, cannot be processed properly, must send number,
        // probly use logic to handle
        slug: this.announcementForm!.value.slug as string,
        image_url: this.announcementForm!.value.image_url as string,
        publish_date: new Date(),
        modification_date: new Date()
      };
      this.announcementService.createAnnouncement(announcement).subscribe(
        () => this.router.navigate(['/announcements']),
        (error) => console.error('Error creating announcement', error)
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/announcements']);
  }
}
