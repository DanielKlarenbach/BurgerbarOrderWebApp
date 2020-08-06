import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDishListComponent } from './order-dish-list.component';

describe('OrderDishListComponent', () => {
  let component: OrderDishListComponent;
  let fixture: ComponentFixture<OrderDishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
