import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Preloadi returnili load
    console.log({route});
    if(route.data && route.data['preload']) {
      return load()
    }
    // Ma tpreloadich obserable(null) of(null)
    return of(null)
  }
}
