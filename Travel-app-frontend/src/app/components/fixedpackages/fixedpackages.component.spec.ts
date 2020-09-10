import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedpackagesComponent } from './fixedpackages.component';

describe('FixedpackagesComponent', () => {
  let component: FixedpackagesComponent;
  let fixture: ComponentFixture<FixedpackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedpackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
