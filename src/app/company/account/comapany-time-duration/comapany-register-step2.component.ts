import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../../extends/extend-head-titles.enum";
import {ExtendWeeklyDaysLabels} from "../../../extends/extend-weekly-days-labels.enum";
import {ExtendBtnNames} from "../../../extends/extend-btn-names.enum";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-comapany-register-step2',
  templateUrl: './comapany-register-step2.component.html',
  styleUrls: ['./comapany-register-step2.component.sass']
})
export class ComapanyTimeDurationComponent implements OnInit {
  readonly headTitle: string = ExtendHeadTitles.registerStep2Title;
  readonly saturday: string = ExtendWeeklyDaysLabels.saturday;
  readonly sunday: string = ExtendWeeklyDaysLabels.sunday;
  readonly monday: string = ExtendWeeklyDaysLabels.monday;
  readonly tuesday: string = ExtendWeeklyDaysLabels.tuesday;
  readonly wednesday: string = ExtendWeeklyDaysLabels.wednesday;
  readonly thursday: string = ExtendWeeklyDaysLabels.thursday;
  readonly friday: string = ExtendWeeklyDaysLabels.friday;
  readonly updateBtn: string = ExtendBtnNames.updateBtn;
  loading: boolean;
  updateSuccess: boolean;
  days: any[] = [];

  data: any = localStorage.getItem('data');
  workinDays: any = JSON.parse(this.data).work_days;

  Daysaturday: string = "saturday";
  Daysunday: string = "sunday";
  Daymonday: string = "monday";
  Daytuesday: string = "tuesday";
  Daywednesday: string = "wednesday";
  Daythursday: string = "thursday";
  Dayfriday: string = "friday";

  shift: any = {
    night: "night",
    morining: "morning"
  };
  satMoData = this.workinDays[0];
  satNiData = this.workinDays[1];

  sunMoData = this.workinDays[2];
  sunNiData = this.workinDays[3];

  monMoData = this.workinDays[4];
  monNiData = this.workinDays[5];

  tueMoData = this.workinDays[6];
  tueNiData = this.workinDays[7];

  wedMoData = this.workinDays[8];
  wedNiData = this.workinDays[9];

  thuMoData = this.workinDays[10];
  thuNiData = this.workinDays[11];

  friMoData = this.workinDays[12];
  friNiData = this.workinDays[13];

  saturdayMorFrom: string;
  saturdayMorTo: string;

  saturdayNigFrom: string;
  saturdayNigTo: string;

  sundayMorFrom: string;
  sundayMorTo: string;

  sundayNigFrom: string;
  sundayNigTo: string;

  mondayMorFrom: string;
  mondayMorTo: string;

  mondayNigFrom: string;
  mondayNigTo: string;

  tuesdayMorFrom: string;
  tuesdayMorTo: string;

  tuesdayNigFrom: string;
  tuesdayNigTo: string;

  wednesdayMorFrom: string;
  wednesdayMorTo: string;

  wednesdayNigFrom: string;
  wednesdayNigTo: string;

  thursdayMorFrom: string;
  thursdayMorTo: string;

  thursdayNigFrom: string;
  thursdayNigTo: string;

  fridayMorFrom: string;
  fridayMorTo: string;

  fridayNigFrom: string;
  fridayNigTo: string;

  companyData: any[] = [];


  constructor(private authservice: AccountService) {

  }

  updateWorkinDays() {

    this.loading = true;
    this.days.push(
      {
        day: this.Daysaturday,
        from: this.saturdayMorFrom,
        to: this.saturdayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daysaturday,
        from: this.saturdayNigFrom,
        to: this.saturdayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Daysunday,
        from: this.sundayMorFrom,
        to: this.sundayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daysunday,
        from: this.sundayNigFrom,
        to: this.sundayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Daymonday,
        from: this.mondayMorFrom,
        to: this.mondayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daymonday,
        from: this.mondayNigFrom,
        to: this.mondayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Daytuesday,
        from: this.tuesdayMorFrom,
        to: this.tuesdayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daytuesday,
        from: this.tuesdayNigFrom,
        to: this.tuesdayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Daywednesday,
        from: this.wednesdayMorFrom,
        to: this.wednesdayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daywednesday,
        from: this.wednesdayNigFrom,
        to: this.wednesdayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Daythursday,
        from: this.thursdayMorFrom,
        to: this.thursdayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Daythursday,
        from: this.thursdayNigFrom,
        to: this.thursdayNigTo,
        shift: this.shift.night
      },
      {
        day: this.Dayfriday,
        from: this.fridayMorFrom,
        to: this.fridayMorTo,
        shift: this.shift.morining
      },
      {
        day: this.Dayfriday,
        from: this.fridayNigFrom,
        to: this.fridayNigTo,
        shift: this.shift.night
      }
    );
    const data = {
      days: this.days,
    };
    this.authservice.updateWorkingDays(data)
      .subscribe((data: any) => {
          this.updateSuccess = true;
          this.loading = false;
          this.authservice.getCompanyData().subscribe(data => {
            this.companyData = data.data;
            localStorage.setItem('data', JSON.stringify(data.data));
            console.log(this.companyData);
          });

        },
        error => {
          this.loading = false;
        });
  }

  ngOnInit() {
    if (this.workinDays == "") {
      this.saturdayMorFrom = "";
      this.saturdayMorTo = "";

      this.saturdayNigFrom = "";
      this.saturdayNigTo = "";

      this.sundayMorFrom = "";
      this.sundayMorTo = "";

      this.sundayNigFrom = "";
      this.sundayNigTo = "";

      this.mondayMorFrom = "";
      this.mondayMorTo = "";

      this.mondayNigFrom = "";
      this.mondayNigTo = "";

      this.tuesdayMorFrom = "";
      this.tuesdayMorTo = "";

      this.tuesdayNigFrom = "";
      this.tuesdayNigTo = "";

      this.wednesdayMorFrom = "";
      this.wednesdayMorTo = "";

      this.wednesdayNigFrom = "";
      this.wednesdayNigTo = "";

      this.thursdayMorFrom = "";
      this.thursdayMorTo = "";

      this.thursdayNigFrom = "";
      this.thursdayNigTo = "";

      this.fridayMorFrom = "";
      this.fridayMorTo = "";

      this.fridayNigFrom = "";
      this.fridayNigTo = "";
    }
    else {
      this.saturdayMorFrom = this.satMoData.from;
      this.saturdayMorTo = this.satMoData.to;

      this.saturdayNigFrom = this.satNiData.from;
      this.saturdayNigTo = this.satNiData.to;

      this.sundayMorFrom = this.sunMoData.from;
      this.sundayMorTo = this.sunMoData.to;

      this.sundayNigFrom = this.sunNiData.from;
      this.sundayNigTo = this.sunNiData.to;

      this.mondayMorFrom = this.monMoData.from;
      this.mondayMorTo = this.monMoData.to;

      this.mondayNigFrom = this.monNiData.from;
      this.mondayNigTo = this.monNiData.to;

      this.tuesdayMorFrom = this.tueMoData.from;
      this.tuesdayMorTo = this.tueMoData.to;

      this.tuesdayNigFrom = this.tueNiData.from;
      this.tuesdayNigTo = this.tueNiData.to;

      this.wednesdayMorFrom = this.wedMoData.from;
      this.wednesdayMorTo = this.wedMoData.to;

      this.wednesdayNigFrom = this.wedNiData.from;
      this.wednesdayNigTo = this.wedNiData.to;

      this.thursdayMorFrom = this.thuMoData.from;
      this.thursdayMorTo = this.thuMoData.to;

      this.thursdayNigFrom = this.thuNiData.from;
      this.thursdayNigTo = this.thuNiData.to;

      this.fridayMorFrom = this.friMoData.from;
      this.fridayMorTo = this.friMoData.to;

      this.fridayNigFrom = this.friNiData.from;
      this.fridayNigTo = this.friNiData.to;
    }
    /*for (let day of this.workinDays) {
      console.log(day[0]);
      if (day.from !== null) {
        console.log("yes");
      }
    }
    console.log(this.workinDays[0]);
    let satMoData = this.workinDays[0];
    let satNiData = this.workinDays[1];
    let NewTimesaturday = {
      moFrom: satMoData.from,
      moTo: satMoData.to,
      NiFrom: satNiData.from,
      NiTo: satNiData.tos
    };
    console.log(saturday);
  */
  }


}
