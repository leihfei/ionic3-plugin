/**
 * Created by 雷洪飞 on 2017/9/25.
 * @function:
 */

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ContactPage} from "./contact";
@NgModule({
  imports:[
    IonicPageModule.forChild(ContactPage)
  ],
  declarations:[
    ContactPage
  ]
})
export class TabsModule{

}
