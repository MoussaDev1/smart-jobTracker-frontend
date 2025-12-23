import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial jobs', () => {
    const jobs = service.jobs();
    expect(jobs.length).toBe(2);
    expect(jobs[0].title).toBe('Software Engineer');
    expect(jobs[1].company).toBe('Web Solutions');
  });
});
