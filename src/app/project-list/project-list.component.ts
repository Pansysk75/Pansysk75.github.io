import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project, ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  projects?: Project[];
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
