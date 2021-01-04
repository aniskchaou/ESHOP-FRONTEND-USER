import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBannerComponent } from './medium-banner.component';

describe('MediumBannerComponent', () => {
  let component: MediumBannerComponent;
  let fixture: ComponentFixture<MediumBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
