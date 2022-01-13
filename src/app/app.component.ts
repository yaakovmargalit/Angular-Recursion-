import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  starsNum:any = prompt('Select the number of rows')
  stars:any[]=[this.starsNum-1]
  title = 'ng-recursion';
}
