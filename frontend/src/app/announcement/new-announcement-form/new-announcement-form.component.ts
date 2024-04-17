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
  constructor(private router: Router) {}

  announcementForm = new FormGroup({
    headline: new FormControl(''),
    synopsis: new FormControl(''),
    mainStory: new FormControl(''),
    organization: new FormControl('')
  });

  goToNewAnnouncement(): void {
    this.router.navigate(['/new-announcement']);
  }

  onSubmit(): void {
    if (this.announcementForm.valid) {
      console.log('Form Data:', this.announcementForm.value);
      // Here you can also send the data to a server or perform other actions
    }
    this.router.navigate(['/announcements']);
  }

  cancel(): void {
    this.router.navigate(['/announcements']);
  }
}
