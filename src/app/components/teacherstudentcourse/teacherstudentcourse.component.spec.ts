import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherstudentcourseComponent } from './teacherstudentcourse.component';

describe('TeacherstudentcourseComponent', () => {
  let component: TeacherstudentcourseComponent;
  let fixture: ComponentFixture<TeacherstudentcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherstudentcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherstudentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
