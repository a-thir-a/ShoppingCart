import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codetest';
  totalcount:any;
  newCount:any;
  count(totalCount :any) {
    this.newCount=totalCount }
}
