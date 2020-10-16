import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSlideshowComponent } from './quote-slideshow.component';

describe('QuoteSlideshowComponent', () => {
  let component: QuoteSlideshowComponent;
  let fixture: ComponentFixture<QuoteSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
