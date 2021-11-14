import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface Project {
  name: string;
  caption: string;
  description?: string;
  image?: string;
  material_icon?: string;
  url?: string;

}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('smooth-collapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('250ms')),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  @Input()
  project!: Project;

  isExpanded: boolean = false;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  constructor() {
  }

  ngOnInit() { }
}
