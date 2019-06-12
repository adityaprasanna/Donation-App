import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { Router } from "@angular/router";
declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public progressStatus: string;
  public progressStatusRemaining: string;
  public totalAmount: number;
  public totalDonations: number;
  public remainingAmount: number;
  public clientCountry: string;
  public time: any;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getData().subscribe(data => {
      if (data) {
        this.totalAmount = data.feed.entry
          ? data.feed.entry[0].gsx$total.$t
          : 0;
        this.totalDonations = data.feed.entry
          ? data.feed.entry[0].gsx$numberofdonations.$t
          : 0;
        this.remainingAmount = 1000 - this.totalAmount;
        const progress = this.totalAmount / 10;
        this.progressStatus = progress + "%";
        this.progressStatusRemaining = 100 - progress + "%";
      }
    });
    this.authService.retrieveUserLocation().subscribe(data => {
      if (data) {
        this.clientCountry = data.country;
      }
    });
  }

  donateButtonClick() {
    // Get client's time of donating
    const currentTime = new Date();
    this.time = currentTime.getHours();

    // Check for invalid inputs or empty string
    let inputAmount = (<HTMLInputElement>document.getElementById("amount"))
      .value;
    let num = /^\d+$/;

    if (this.totalAmount < 1000 && num.test(inputAmount) && inputAmount) {
      let $form = $("form#test-form");
      $.ajax({
        url:
          "https://script.google.com/macros/s/AKfycbxYt5n0O64M4rCrmKg36qhFmdVggWlGmwrn43Vr09IY5xCUQ3Y/exec",
        method: "GET",
        dataType: "json",
        data: $form.serialize()
      });
      // this.authService.postData(20);
    } else {
      (<HTMLInputElement>(
        document.getElementById("submit-form")
      )).disabled = true;
      alert("Invalid donation. Please input numbers only.");
    }
  }

  ngOnInit() {}
}
