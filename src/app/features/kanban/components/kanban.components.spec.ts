import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanComponents } from './kanban.components';

describe('Components', () => {
  let component: KanbanComponents;
  let fixture: ComponentFixture<KanbanComponents>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
