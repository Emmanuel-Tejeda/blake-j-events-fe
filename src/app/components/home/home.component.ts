import { Component } from '@angular/core';
import 'popper.js';
import 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = ["/assets/pictures/event-1.jpg",
            "/assets/pictures/event-2.jpg",
            "/assets/pictures/event-3.jpg",]


}
 