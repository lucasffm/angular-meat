import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CartItem } from "../../restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: "mt-order-items",
  templateUrl: "./order-items.component.html"
})
export class OrderItemsComponent implements OnInit {
  @Input() items: CartItem[];

  @Output() increaseQty: EventEmitter<any> = new EventEmitter();
  @Output() decreaseQty: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitIncreaseQty(item: CartItem) {
    this.increaseQty.emit(item);
  }
  emitDecreaseQty(item: CartItem) {
    this.decreaseQty.emit(item);
  }
  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
