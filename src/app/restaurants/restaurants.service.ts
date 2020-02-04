import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { MEAT_API } from "../app.api";
import { Restaurant } from "./restaurant/restaurant.model";
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  rests: Restaurant[];

  constructor(private httpClient: HttpClient) {}

  restaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(
      map((res: Restaurant[]) => res),
      catchError(ErrorHandler.handleError)
    );
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.httpClient.get(`${MEAT_API}/restaurants/${id}`).pipe(
      map((res: Restaurant) => res),
      catchError(ErrorHandler.handleError)
    );
  }

  reviews(id: string): Observable<any> {
    return this.httpClient.get(`${MEAT_API}/restaurants/${id}/reviews`).pipe(
      map((res: any) => res),
      catchError(ErrorHandler.handleError)
    );
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.httpClient.get(`${MEAT_API}/restaurants/${id}/menu`).pipe(
      map((res: MenuItem[]) => res),
      catchError(ErrorHandler.handleError)
    );
  }
}
