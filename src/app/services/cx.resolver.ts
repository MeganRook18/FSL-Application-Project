import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {DatastoreService} from "./datastore.service";
import {policiesI} from "../app.models";


@Injectable()
export class CxResolver implements Resolve<policiesI[]> {
  constructor(private _api: DatastoreService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._api.getPolicies();
  }
}
