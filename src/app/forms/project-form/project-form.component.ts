import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/first';
import { Project } from '../../models/project.model';
import { Build } from '../../models/build.model';
import { ProjectBuilderService } from '../../services/project-builder/project-builder.service';
import { BuildService } from '../../services/build/build.service';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
    model: any = {title: '', git: ''};

    @Output()
    newProjectEvent: EventEmitter<Project> = new EventEmitter<Project>();

    constructor() { }

    onSubmit() {
        const project: Project = new Project(this.model);
        this.newProjectEvent.emit(project);
    }

    ngOnInit() {
    }

}
