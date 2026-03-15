import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioList } from './sessio-list';

describe('SessioList', () => {
  let component: SessioList;
  let fixture: ComponentFixture<SessioList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessioList],
    }).compileComponents();

    fixture = TestBed.createComponent(SessioList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
