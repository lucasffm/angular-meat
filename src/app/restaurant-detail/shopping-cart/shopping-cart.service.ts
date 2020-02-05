import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];
  constructor() {}

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, acc) => prev + acc, 0);
  }

  increaseQty(item: CartItem) {
    item.quantity += 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity -= 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
