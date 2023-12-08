import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirhunterComponent } from './excluirhunter.component';

describe('ExcluirhunterComponent', () => {
  let component: ExcluirhunterComponent;
  let fixture: ComponentFixture<ExcluirhunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirhunterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
