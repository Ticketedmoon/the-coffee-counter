import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImageContextComponent } from './header-image-context.component';

describe('HeaderImageContextComponent', () => {
  let component: HeaderImageContextComponent;
  let fixture: ComponentFixture<HeaderImageContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImageContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
