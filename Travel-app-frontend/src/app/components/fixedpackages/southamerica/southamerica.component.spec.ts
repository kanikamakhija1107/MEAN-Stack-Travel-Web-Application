import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthamericaComponent } from './southamerica.component';

describe('SouthamericaComponent', () => {
  let component: SouthamericaComponent;
  let fixture: ComponentFixture<SouthamericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthamericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
