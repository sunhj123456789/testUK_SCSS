import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor() {}
  accountLinks = [
    {
      title: 'Payment Settings',
      link: '#',
    },
    {
      title: 'Add/Remove Vehicles',
      link: '#',
    },
    {
      title: 'Crossings and Payment History',
      link: '#',
    },
    {
      title: 'PCN History',
      link: '#',
    },
    {
      title: 'Change Personal Details',
      link: '#',
    },
    {
      title: 'Notification Preferences',
      link: '#',
    },
    {
      title: 'Contact Dart Charge',
      link: '#',
    },
    {
      title: 'Charges and Fine Information',
      link: '#',
    },
  ];
  ngOnInit(): void {}
}
