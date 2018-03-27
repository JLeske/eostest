import { TestBed, inject } from '@angular/core/testing';

import { ProjectBuilderService } from './project-builder.service';

describe('ProjectBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectBuilderService]
    });
  });

  it('should ...', inject([ProjectBuilderService], (service: ProjectBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
