import {Component} from '@angular/core';
import {ExtendHeadTitles} from '../../../extends/extend-head-titles.enum';
import {ExtendCompanyLabels} from '../../../extends/extend-company-labels.enum';
import {ExtendAddProjectLabels} from '../../../extends/extend-add-project-labels.enum';
import {ExtendCommentLabels} from '../../../extends/extend-comment-labels.enum';
import {CompanyService} from '../../../search/company.service';

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

  companyDTS: any[] = [];

  constructor(private companyDts: CompanyService) {

  }


  ngOnInit() {
    this.companyDts.getDetails().subscribe(data => {
      this.companyDTS = data.data;
      console.log(data);
    });


  }
}

