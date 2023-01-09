import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookingForm = new FormGroup({
    
    cost: new FormControl(''),
    consultationDate: new FormControl(''),
    budget: new FormControl(''),
    contactStartTime: new FormControl(''),
    contactEndTime: new FormControl(''),

  });
 
  printForm(){

    console.log(this.bookingForm.value);
  }
}
