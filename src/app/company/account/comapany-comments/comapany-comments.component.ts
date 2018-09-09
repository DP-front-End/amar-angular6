import {Component, OnInit} from '@angular/core';
import {ExtendCommentLabels} from "../../../extends/extend-comment-labels.enum";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-comapany-comments',
  templateUrl: './comapany-comments.component.html',
  styleUrls: ['./comapany-comments.component.sass']
})
export class ComapanyCommentsComponent implements OnInit {
  readonly commentsHeadTitle: string = ExtendCommentLabels.commentsTitle;
  readonly commentName: string = ExtendCommentLabels.commentName;
  readonly commentDes: string = ExtendCommentLabels.Comment;
  readonly postBtn: string = ExtendCommentLabels.answerComment;

  getComment = [];

  constructor(private acServ: AccountService) {
  }

  ngOnInit() {
    this.acServ.getComments().subscribe(data => {
      this.getComment = data.data;
    });
  }

}
