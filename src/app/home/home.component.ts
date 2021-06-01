import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tableList = [
    {
      vehicleType: 'Motorcycle, mopeds, quad bikes',
      paymentType: 'Free',
      paymentWeek: 'Free',
    },
    {
      vehicleType: 'Next 33 weeks	',
      paymentType: '109.80 per week',
      paymentWeek: '109.80 per week',
    },
    {
      vehicleType: 'Total estimated pay',
      paymentType: '4,282.20',
      paymentWeek: '109.80 per week',
    },
  ];

  ngOnInit(): void {
    // tableList=[
    //   {vehicleType:'Motorcycle, mopeds, quad bikes',paymentType:'Free',paymentWeek:'Free'},
    //   {vehicleType:'Next 33 weeks	',paymentType:'109.80 per week',paymentWeek:'109.80 per week'},
    //   {vehicleType:'Total estimated pay',paymentType:'4,282.20',paymentWeek:'109.80 per week'}
    // ]
  }
}
