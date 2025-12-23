import { JobApplication } from '../../../core/model/job.model';
import { JobService } from '../../../core/service/job.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-components',
  imports: [],
  templateUrl: './kanban.components.html',
  styleUrl: './kanban.components.scss',
})
export class KanbanComponents {
  constructor(public jobService: JobService) {}
}
