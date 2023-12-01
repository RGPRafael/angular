import { Component } from '@angular/core';



//  the selector element binds
//the whole component to the <app-root> selector included in the index.html file.
@Component({
  selector: 'app-root', // html selector used to bind the hhtml file
  templateUrl: './app.component.html', //the HTML template file associated with the component
  styleUrls: ['./app.component.css']  // one or more CSS files associated with the component
})
export class AppComponent {
  title = 'hunterTavern';
}
