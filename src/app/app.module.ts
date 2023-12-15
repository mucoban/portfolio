import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgScrollbarModule} from "ngx-scrollbar";
import {SectionTextsComponent} from "./section-texts/section-texts.component";
import {StInfoComponent} from "./section-texts/svg-components/st-info.component";
import {StSkillsComponent} from "./section-texts/svg-components/st-skills.component";
import {StExperienceComponent} from "./section-texts/svg-components/st-experience.component";
import {StSideWorksComponent} from "./section-texts/svg-components/st-side-works.component";

@NgModule({
  declarations: [
    AppComponent,
    SectionTextsComponent,
    StInfoComponent,
    StSkillsComponent,
    StExperienceComponent,
    StSideWorksComponent,
  ],
  imports: [
    BrowserModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
