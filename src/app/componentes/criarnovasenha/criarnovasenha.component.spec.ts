import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarnovasenhaComponent } from './criarnovasenha.component';

describe('CriarnovasenhaComponent', () => {
  let component: CriarnovasenhaComponent;
  let fixture: ComponentFixture<CriarnovasenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarnovasenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarnovasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
