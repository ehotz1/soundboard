import { TestBed } from '@angular/core/testing';

import { SongUploaderService } from './song-uploader.service';

describe('SongUploaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongUploaderService = TestBed.get(SongUploaderService);
    expect(service).toBeTruthy();
  });
});
