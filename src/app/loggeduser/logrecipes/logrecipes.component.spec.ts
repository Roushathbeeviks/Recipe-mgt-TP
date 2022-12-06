import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrecipesComponent } from './logrecipes.component';

describe('LogrecipesComponent', () => {
  let component: LogrecipesComponent;
  let fixture: ComponentFixture<LogrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogrecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
