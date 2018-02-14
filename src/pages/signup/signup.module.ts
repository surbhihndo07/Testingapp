import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { SignupPage } from './signup';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../../assets/i18n/", ".json");
}


@NgModule({
  
  
  declarations: [
    SignupPage
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    TranslateModule.forChild(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }
