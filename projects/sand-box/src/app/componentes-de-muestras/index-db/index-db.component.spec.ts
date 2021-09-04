import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDbComponent } from './index-db.component';

describe('IndexDbComponent', () => {
  let component: IndexDbComponent;
  let fixture: ComponentFixture<IndexDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
