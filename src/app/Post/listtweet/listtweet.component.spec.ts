import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtweetComponent } from './listtweet.component';

describe('ListtweetComponent', () => {
  let component: ListtweetComponent;
  let fixture: ComponentFixture<ListtweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
