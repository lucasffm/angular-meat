import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { Restaurant } from "../restaurants/restaurant/restaurant.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html"
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  constructor(
    private service: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe((restaurant: Restaurant) => (this.restaurant = restaurant));
  }
}
