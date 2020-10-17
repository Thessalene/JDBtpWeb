import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationPAgeComponent } from './prestation-page.component';

describe('PrestationPAgeComponent', () => {
  let component: PrestationPAgeComponent;
  let fixture: ComponentFixture<PrestationPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
