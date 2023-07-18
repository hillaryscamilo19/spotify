import { Component } from '@angular/core';
import { GoogleservicService } from 'src/app/modules/auth/services/googleservic.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent {
  constructor(private GoogleApi: GoogleservicService) {}


  logout() {
    this.GoogleApi.logout();
  }
}
