import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translate: TranslateService,
    private iab: InAppBrowser) {

    // this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
    //   this.signupErrorString = value;
    // })


    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  openpdf(){
      var target = "_system";
var options = "location=yes,hidden=no,enableViewportScale=yes,toolbar=no,hardwareback=yes";
      var url ='http://damacuat.navitusbytes.com/uploads/pdf/06-Feb-2018-18-03-20_BUY_Dubai_BUY_Damac.pdf';
     // var res = encodeURI(url);
      const browser = this.iab.create(url,target,options);
    console.log('opening pdf');
  }
}
