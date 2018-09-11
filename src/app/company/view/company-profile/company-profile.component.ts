import {Component} from '@angular/core';
import {ExtendHeadTitles} from '../../../extends/extend-head-titles.enum';
import {ExtendCompanyLabels} from '../../../extends/extend-company-labels.enum';
import {ExtendAddProjectLabels} from '../../../extends/extend-add-project-labels.enum';
import {ExtendCommentLabels} from '../../../extends/extend-comment-labels.enum';
import {CompanyService} from '../../../search/company.service';
import {ExtendWeeklyDaysLabels} from '../../../extends/extend-weekly-days-labels.enum';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass']
})
export class CompanyProfileComponent {
  readonly headTitle: string = ExtendHeadTitles.companyProfileTitle;
  readonly coName: string = ExtendCompanyLabels.CompanyNameLabel;
  readonly coPrief: string = ExtendCompanyLabels.briefNameLabel;
  readonly coCategory: string = ExtendCompanyLabels.categoryNameLabel;
  readonly coSpecialization: string = ExtendCompanyLabels.specializationNameLabel;
  readonly coImage: string = ExtendCompanyLabels.companyImageNameLabel;
  readonly coCity: string = ExtendCompanyLabels.companyCity;
  readonly coPhone: string = ExtendCompanyLabels.companyphone;
  readonly coAddress: string = ExtendCompanyLabels.companyAddress;
  readonly coEmail: string = ExtendCompanyLabels.companyEmail;
  readonly coLinks: string = ExtendCompanyLabels.companyLinks;
  readonly CoRate: string = ExtendCompanyLabels.companyRateNameLabel;
  readonly projectHeadTitle: string = ExtendHeadTitles.companyProjectTitle;
  readonly projectName: string = ExtendAddProjectLabels.projectNameLabel;
  readonly projectDesc: string = ExtendAddProjectLabels.briefProjectNameLabel;
  readonly projectImgs: string = ExtendAddProjectLabels.projectImagesNameLabel;
  readonly projectNaturalImgs: string = ExtendAddProjectLabels.naturalProjectImagesNameLabel;
  readonly projectAddress: string = ExtendAddProjectLabels.projectAddress;
  readonly commentHeadTitle: string = ExtendHeadTitles.companyCommentTitle;
  readonly latestCommentTitle: string = ExtendCommentLabels.latestCommentNameLabel;
  readonly commentName: string = ExtendCommentLabels.commentName;
  readonly commentDes: string = ExtendCommentLabels.Comment;
  readonly postBtn: string = ExtendCommentLabels.postComment;

  readonly saturday: string = ExtendWeeklyDaysLabels.saturday;
  readonly sunday: string = ExtendWeeklyDaysLabels.sunday;
  readonly monday: string = ExtendWeeklyDaysLabels.monday;
  readonly tuesday: string = ExtendWeeklyDaysLabels.tuesday;
  readonly wednesday: string = ExtendWeeklyDaysLabels.wednesday;
  readonly thursday: string = ExtendWeeklyDaysLabels.thursday;
  readonly friday: string = ExtendWeeklyDaysLabels.friday;

  private data: any = localStorage.getItem('co');
  coDetails: any = JSON.parse(this.data);
  coimages: any[] = JSON.parse(this.data).meta_data.images;
  workDays: any[] = JSON.parse(this.data).work_days;


  saturdayMorning: any = this.workDays[0];
  saturdayNight: any = this.workDays[1];

  sundayMorning: any = this.workDays[2];
  sundayNight: any = this.workDays[3];

  mondayMorning: any = this.workDays[4];
  mondayNight: any = this.workDays[5];

  tuesdayMorning: any = this.workDays[6];
  tuesdayNight: any = this.workDays[7];

  wednesdayMorning: any = this.workDays[8];
  wednesdayNight: any = this.workDays[9];

  thursdayMorning: any = this.workDays[10];
  thursdayNight: any = this.workDays[11];

  fridayMorning: any = this.workDays[12];
  fridayNight: any = this.workDays[13];

  constructor(private companyDts: CompanyService) {

  }


  ngOnInit() {
    if (this.saturdayMorning.from == '0' || this.saturdayMorning.to == '0') {
      this.saturdayMorning.from = 'لانعمل في هذه الفترة';
      this.saturdayMorning.to = 'لانعمل في هذه الفترة';
    }
    else if (this.saturdayNight.from == '0' || this.saturdayNight.to == '0') {
      this.saturdayNight.from = 'لانعمل في هذه الفترة';
      this.saturdayNight.to = 'لانعمل في هذه الفترة';
    }
    else if (this.sundayMorning.from == '0' || this.sundayMorning.to == '0') {
      this.sundayMorning.from = 'لانعمل في هذه الفترة';
      this.sundayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.sundayNight.from == '0' || this.sundayNight.to == '0') {
      this.sundayNight.from = 'لانعمل في هذه الفترة';
      this.sundayNight.to = 'لانعمل في هذه الفترة';
    }

    if (this.mondayMorning.from == '0' || this.mondayMorning.to == '0') {
      this.mondayMorning.from = 'لانعمل في هذه الفترة';
      this.mondayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.mondayNight.from == '0' || this.mondayNight.to == '0') {
      this.mondayNight.from = 'لانعمل في هذه الفترة';
      this.mondayNight.to = 'لانعمل في هذه الفترة';
    }

    if (this.tuesdayMorning.from == '0' || this.tuesdayMorning.to == '0') {
      this.tuesdayMorning.from = 'لانعمل في هذه الفترة';
      this.tuesdayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.tuesdayNight.from == '0' || this.tuesdayNight.to == '0') {
      this.tuesdayNight.from = 'لانعمل في هذه الفترة';
      this.tuesdayNight.to = 'لانعمل في هذه الفترة';
    }

    if (this.wednesdayMorning.from == '0' || this.wednesdayMorning.to == '0') {
      this.wednesdayMorning.from = 'لانعمل في هذه الفترة';
      this.wednesdayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.wednesdayNight.from == '0' || this.wednesdayNight.to == '0') {
      this.wednesdayNight.from = 'لانعمل في هذه الفترة';
      this.wednesdayNight.to = 'لانعمل في هذه الفترة';
    }

    if (this.thursdayMorning.from == '0' || this.thursdayMorning.to == '0') {
      this.thursdayMorning.from = 'لانعمل في هذه الفترة';
      this.thursdayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.thursdayNight.from == '0' || this.thursdayNight.to == '0') {
      this.thursdayNight.from = 'لانعمل في هذه الفترة';
      this.thursdayNight.to = 'لانعمل في هذه الفترة';
    }

    if (this.fridayMorning.from == '0' || this.fridayMorning.to == '0') {
      this.fridayMorning.from = 'لانعمل في هذه الفترة';
      this.fridayMorning.to = 'لانعمل في هذه الفترة';
    }
    if (this.fridayNight.from == '0' || this.fridayNight.to == '0') {
      this.fridayNight.from = 'لانعمل في هذه الفترة';
      this.fridayNight.to = 'لانعمل في هذه الفترة';
    }
    
    console.log(this.coimages);
    console.log(this.sundayMorning);
  }
}

