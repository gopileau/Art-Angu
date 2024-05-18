import { TestBed } from '@angular/core/testing';

import { TopArtisansService } from './top-artisans.service';

describe('TopArtisansService', () => {
  let service: TopArtisansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopArtisansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
