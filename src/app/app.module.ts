import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectFormComponent } from './forms/project-form/project-form.component';

import { ProjectBuilderService } from './services/project-builder/project-builder.service';
import { BuildService } from './services/build/build.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ProjectBuilderService,
    BuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
