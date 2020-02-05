import { Component, OnInit } from "@angular/core";
import { RadioOption } from "../shared/radio/radio-option.model";
import { OrderService } from "./order.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão de Crédito", value: "REF" }
  ];

  delivery: number = 8;

  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increase(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decrease(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: any) {
    console.log(order);
  }
}
