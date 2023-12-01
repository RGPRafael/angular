import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHunterComponent } from './cadastro-hunter.component';

describe('CadastroHunterComponent', () => {
  let component: CadastroHunterComponent;
  let fixture: ComponentFixture<CadastroHunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHunterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
