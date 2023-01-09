import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'client', component: ClientComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
