import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../menu-item/menu-item.model";
import { RestaurantsService } from "../../restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ShoppingCartService } from "../shopping-cart/shopping-cart.service";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private service: RestaurantsService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.service.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
}
