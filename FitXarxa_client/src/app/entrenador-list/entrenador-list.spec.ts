import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorList } from './entrenador-list';

describe('EntrenadorList', () => {
  let component: EntrenadorList;
  let fixture: ComponentFixture<EntrenadorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorList],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenadorList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
