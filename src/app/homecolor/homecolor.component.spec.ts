import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecolorComponent } from './homecolor.component';

describe('HomecolorComponent', () => {
  let component: HomecolorComponent;
  let fixture: ComponentFixture<HomecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
