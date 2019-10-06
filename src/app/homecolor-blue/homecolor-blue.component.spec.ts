import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecolorBlueComponent } from './homecolor-blue.component';

describe('HomecolorBlueComponent', () => {
  let component: HomecolorBlueComponent;
  let fixture: ComponentFixture<HomecolorBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecolorBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecolorBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
