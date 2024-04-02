import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { RouterModule } from '@angular/router';
import { AnnouncementCardComponent } from './widget/announcement-card/announcement-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';

@NgModule({
  declarations: [
    AnnouncementPageComponent,
    AnnouncementCardComponent,
    AnnouncementDetailComponent
  ],

  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    RouterModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatListModule,
    MatAutocompleteModule
  ]
})
export class AnnouncementModule {}
