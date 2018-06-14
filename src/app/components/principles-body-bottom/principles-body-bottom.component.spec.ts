import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesBodyBottomComponent } from './principles-body-bottom.component';

describe('PrinciplesBodyBottomComponent', () => {
  let component: PrinciplesBodyBottomComponent;
  let fixture: ComponentFixture<PrinciplesBodyBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinciplesBodyBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinciplesBodyBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
