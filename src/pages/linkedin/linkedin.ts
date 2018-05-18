import { Component } from '@angular/core';
import { LinkedIn } from '@ionic-native/linkedin';

@Component({
  selector: 'page-linkedin',
  templateUrl: 'linkedin.html',
})

export class LinkedinPage {

  isLoggedIn: boolean = false
  users: any
    constructor(private linkedin: LinkedIn) {
  }

  ionViewDidAppear() {
    this.linkedin.hasActiveSession().then((active) => {
      this.isLoggedIn = active;
      this.getSelfData();
    });
  }

  getSelfData() {
    this.linkedin.getRequest('people/~')
        .then(res => {
          this.users = res;
        })
        .catch(e => console.log(e));
  }


  logout() {
    this.linkedin.logout();
    this.isLoggedIn = false;
  }


  linkedinLoginFirebase() {

      this.linkedin.login(['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'], true)
        .then(() => {
          this.isLoggedIn = true
          this.getSelfData();
        })
        .catch(e => console.log('Error logging in', e));
  }
}
