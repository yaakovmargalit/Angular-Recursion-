import { Component } from '@angular/core';

const comments = [

  {
    text: "1",
    comments: [
      {
        text: "1.1",
        comments: [
          {
            text: "1.1.1 "
          }
        ]
      },
      {
        text: "1.2",
        comments: [
          {
            text: "1.2.1"
          }
        ]
      }
    ]
  },
  {
    text: "2",
    comments: [
      {
        text: "2.1",
        comments: [
          {
            text: "2.1.1"
          }
        ]
      }
    ]
  }]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postComments = comments
  starsNum:any = prompt('stars?')
  stars:any[]=[this.starsNum-1]
  title = 'ng-recursion';
}
