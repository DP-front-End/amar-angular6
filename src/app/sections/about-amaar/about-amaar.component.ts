import {Component, OnInit} from '@angular/core';
import {ExtendHeadTitles} from "../../extends/extend-head-titles.enum";
import {ExtendBtnNames} from "../../extends/extend-btn-names.enum";

@Component({
  selector: 'app-about-amaar',
  templateUrl: './about-amaar.component.html',
  styleUrls: ['./about-amaar.component.sass']
})
export class AboutAmaarComponent implements OnInit {
  aboutAmaarTitle: string = ExtendHeadTitles.aboutTitle;
  pragraph: string = "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي\n" +
    "        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام\n" +
    "        طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن\n" +
    "        استخدام \"هنا يوجد محتوى نصي، هنا يوجد محتوى نصي\" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من\n" +
    "        برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل افتراضي كنموذج عن النص، وإذا قمت\n" +
    "        بإدخال \"lorem ipsum\" في أي محرك بحث ستظهر\n" +
    "        العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم\n" +
    "        إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.";
  btnName: string = ExtendBtnNames.readMoreBtnName;

  constructor() {
  }

  ngOnInit() {
  }

}
