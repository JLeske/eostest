import { Component, OnInit } from '@angular/core';
import { Build } from './models/build.model';
import { Project } from './models/project.model';
import { ProjectBuilderService } from './services/project-builder/project-builder.service';
import { BuildService } from './services/build/build.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ProjectBuilderService, BuildService]
})
export class AppComponent implements OnInit {
    title = 'EOS Test';
    builds: Build[] = null;

    constructor(
        private projectBuilderService: ProjectBuilderService,
        private buildService: BuildService
    ) {}

    ngOnInit() {
        this.buildService.getAllBuilds().subscribe((result: any) => {
            this.builds = result.builds;
        });
    }

    newProject(project: Project) {
        this.projectBuilderService.startBuild(project).subscribe((result: Build) => {
            console.log('build: ', result);
            if (result.buildResult === 'success' || result.buildResult === 'failure') {
                this.buildService.saveBuild(result).first().subscribe((value: any) => {
                    console.log('save: ', value);
                    this.builds = value;
                    this.builds.sort((a, b) => {
                        return (a.buildLog > b.buildLog) ? -1 : ((b.buildLog > a.buildLog) ? 1 : 0);
                    });
                });
            }
        }, (error: any) => {
            console.log('error: ', error);
        });
    }
}
