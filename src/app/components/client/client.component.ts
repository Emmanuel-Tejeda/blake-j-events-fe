import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { IClient } from './client';
import { ClientService } from './client.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {

  client: IClient = {

    clientFirstName : '',
    clientLastName : '',
    clientPhoneNumber : '',
    clientEmail : '',
  };

  constructor(private clientService: ClientService){}

  clientForm = new FormGroup({
    
    clientFirstName: new FormControl(''),
    clientLastName: new FormControl(''),
    clientPhoneNumber: new FormControl(''),
    clientEmail: new FormControl(''),

  });


 
  formSubmit(){
    
    this.client.clientFirstName = this.clientForm.value.clientFirstName!;
    this.client.clientEmail = this.clientForm.value.clientEmail!;
    this.client.clientLastName = this.clientForm.value.clientLastName!;
    this.client.clientPhoneNumber = this.clientForm.value.clientPhoneNumber!;

    console.log(this.client);

    this.clientService.addClient(this.client).subscribe(res => console.log(res));

  }

}
