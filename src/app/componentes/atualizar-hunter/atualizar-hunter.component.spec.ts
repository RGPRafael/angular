import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarHunterComponent } from './atualizar-hunter.component';

describe('AtualizarHunterComponent', () => {
  let component: AtualizarHunterComponent;
  let fixture: ComponentFixture<AtualizarHunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarHunterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
