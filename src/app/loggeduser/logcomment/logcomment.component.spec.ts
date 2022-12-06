import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcommentComponent } from './logcomment.component';

describe('LogcommentComponent', () => {
  let component: LogcommentComponent;
  let fixture: ComponentFixture<LogcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
