/**
 * Created by 雷洪飞 on 2017/9/25.
 * @function:
 */

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home";
@NgModule({
  imports:[
    IonicPageModule.forChild(HomePage)
  ],
  declarations:[
    HomePage
  ]
})
export class TabsModule{

}
