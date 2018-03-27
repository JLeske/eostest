import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Build } from '../../models/build.model';
import { Project } from '../../models/project.model';

@Injectable()
export class ProjectBuilderService {
    behaviourSubjects: any = {};
    constructor() { }
    
    public startBuild(project: Project): BehaviorSubject<Build> {
        let build: Build = new Build({});
        build.projectName = project.title;
        build.buildLog = '';
        build.buildResult = '';
        let bs: BehaviorSubject<Build> = new BehaviorSubject<Build>(build);
        this.behaviourSubjects[build.id] = bs;
        this.simulateBuilding(build);
        return bs;
    }

    private simulateBuilding(build: Build) {
        let bs: BehaviorSubject<Build> = this.behaviourSubjects[build.id];
        build.buildResult = 'success';
        if (build.projectName.length < 3) {
            build.buildResult = 'failure';
        }
        build.buildLog = new Date().toString();
        bs.next(build);
    }
}
