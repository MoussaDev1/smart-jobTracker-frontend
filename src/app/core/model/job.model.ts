export interface JobApplication {
  id: string;
  title: string;
  company: string;
  status: 'TO_APPLY' | 'APPLIED' | 'INTERVIEW';
}
