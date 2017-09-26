/**
 * Created by 雷洪飞 on 2017/9/25.
 * @function:
 */

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {TabsPage} from "./tabs";
@NgModule({
  imports:[
    IonicPageModule.forChild(TabsPage)
  ],
  declarations:[
    TabsPage
  ]
})
export class TabsModule{

}
