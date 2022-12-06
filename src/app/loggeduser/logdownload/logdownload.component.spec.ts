import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdownloadComponent } from './logdownload.component';

describe('LogdownloadComponent', () => {
  let component: LogdownloadComponent;
  let fixture: ComponentFixture<LogdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogdownloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
