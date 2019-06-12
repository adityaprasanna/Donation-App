import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public preFix: string;
  public sheetID: string;
  public postFix: string;
  public googleSheetsURL: string;
  public url: string;
  public locationCheckURL: string;
  public clientCountry: string;

  constructor(private http: Http) {
    // for GET call
    this.preFix = "https://spreadsheets.google.com/feeds/list/";
    this.sheetID = "1eS-SAB8p90IXBR82sx1yppj72Ny93TyXbeSmZ3lNzws";
    this.postFix = "/od6/public/values?alt=json";
    this.googleSheetsURL = this.preFix + this.sheetID + this.postFix;

    // for POST call
    this.url =
      "https://script.google.com/macros/s/AKfycbxYt5n0O64M4rCrmKg36qhFmdVggWlGmwrn43Vr09IY5xCUQ3Y/exec";

    // locationChecker
    this.locationCheckURL = "http://ip-api.com/json";
  }

  getData() {
    // To get total amount donated and number of total donations from google sheets
    return this.http.get(this.googleSheetsURL).pipe(map(x => x.json()));
  }

  // postData(donation) {
  //   // To create new row with donation amount, country and time of donation
  //   return this.http.get("${this.url}" + "?amount=" + donation);
  // }

  retrieveUserLocation() {
    // User/Client's residing country
    return this.http.get(this.locationCheckURL).pipe(map(x => x.json()));
  }
}
