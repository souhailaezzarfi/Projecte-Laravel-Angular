import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioForm } from './sessio-form';

describe('SessioForm', () => {
  let component: SessioForm;
  let fixture: ComponentFixture<SessioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessioForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SessioForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
