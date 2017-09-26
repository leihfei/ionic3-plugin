/**
 * Created by 雷洪飞 on 2017/9/25.
 * @function:
 */

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AboutPage} from "./about";
@NgModule({
  imports:[
    IonicPageModule.forChild(AboutPage)
  ],
  declarations:[
    AboutPage
  ]
})
export class TabsModule{

}
