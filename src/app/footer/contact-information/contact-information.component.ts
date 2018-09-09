import {Component} from '@angular/core';
import {SocialComponent} from '../../header/social/social.component';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {ExtendFooterInfo} from "../../extends/extend-footer-info.enum";

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.sass']
})
export class ContactInformationComponent extends SocialComponent {
  blockTitle: string = ExtendHeadTitles.contactInfoTitle;
  addressLabelName: string = ExtendFooterInfo.address;
  phoneLabelName: string = ExtendFooterInfo.phone;
  emailLabelName: string = ExtendFooterInfo.email;
  facebookUrl: string = "#";
  twitterUrl: string = "#";
  googleUrl: string = "#";
  youtubeUrl: string = "#";
}
