import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarhunterComponent } from './buscarhunter.component';

describe('BuscarhunterComponent', () => {
  let component: BuscarhunterComponent;
  let fixture: ComponentFixture<BuscarhunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarhunterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
