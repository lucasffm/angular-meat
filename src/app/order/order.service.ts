import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MEAT_API } from "../app.api";
import { map, catchError } from "rxjs/operators";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartService,
    private httpClient: HttpClient
  ) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increase(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  itemsValue() {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders();
    headers.append("Content-type", "application/json");
    return this.httpClient.post(`${MEAT_API}/orders`, order, { headers }).pipe(
      map((res: Order) => res),
      catchError(ErrorHandler.handleError)
    );
  }
}
