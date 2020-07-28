import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactDataComponent } from './edit-contact-data.component';

describe('EditContactDataComponent', () => {
  let component: EditContactDataComponent;
  let fixture: ComponentFixture<EditContactDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
