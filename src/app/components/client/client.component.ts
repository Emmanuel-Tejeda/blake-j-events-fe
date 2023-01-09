import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientForm = new FormGroup({
    
    clientFirstName: new FormControl(''),
    clientLastName: new FormControl(''),
    clientPhoneNumber: new FormControl(''),
    clientEmail: new FormControl(''),

  });
 
  printForm(){

    console.log(this.clientForm.value);
  }
}
