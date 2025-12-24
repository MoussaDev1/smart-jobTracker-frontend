import { Injectable, signal } from '@angular/core';
import { JobApplication } from '../model/job.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private _jobs = signal<JobApplication[]>([
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Tech Corp',
      status: 'TO_APPLY',
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Web Solutions',
      status: 'APPLIED',
    },
  ]);

  readonly jobs = this._jobs.asReadonly();
}
