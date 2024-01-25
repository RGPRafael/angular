import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaProvisoriaComponent } from './senha-provisoria.component';

describe('SenhaProvisoriaComponent', () => {
  let component: SenhaProvisoriaComponent;
  let fixture: ComponentFixture<SenhaProvisoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaProvisoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenhaProvisoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
