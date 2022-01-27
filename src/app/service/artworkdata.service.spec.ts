import { TestBed } from '@angular/core/testing';

import { ArtworkdataService } from './artworkdata.service';

describe('ArtworkdataService', () => {
  let service: ArtworkdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
