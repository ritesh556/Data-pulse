import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiteshComponent } from './ritesh.component';

describe('RiteshComponent', () => {
  let component: RiteshComponent;
  let fixture: ComponentFixture<RiteshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiteshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiteshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
