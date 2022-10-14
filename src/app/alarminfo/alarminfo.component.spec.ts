import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarminfoComponent } from './alarminfo.component';

describe('AlarminfoComponent', () => {
  let component: AlarminfoComponent;
  let fixture: ComponentFixture<AlarminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarminfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
