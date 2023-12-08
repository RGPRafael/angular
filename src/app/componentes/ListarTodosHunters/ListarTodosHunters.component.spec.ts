import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhunterComponent } from './ListarTodosHunters.component';

describe('EditarhunterComponent', () => {
  let component: EditarhunterComponent;
  let fixture: ComponentFixture<EditarhunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarhunterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
