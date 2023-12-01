import { TestBed } from '@angular/core/testing';

import { CadastroHunterService } from './cadastro-hunter.service';

describe('CadastroHunterService', () => {
  let service: CadastroHunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroHunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
