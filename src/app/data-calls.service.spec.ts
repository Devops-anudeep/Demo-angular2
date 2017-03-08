/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataCallsService } from './data-calls.service';

describe('DataCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCallsService]
    });
  });

  it('should ...', inject([DataCallsService], (service: DataCallsService) => {
    expect(service).toBeTruthy();
  }));
});
