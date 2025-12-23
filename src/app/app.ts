import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanComponents } from './features/kanban/components/kanban.components';

@Component({
  selector: 'app-root',
  imports: [KanbanComponents],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'smart-jobTracker-frontend';
}
