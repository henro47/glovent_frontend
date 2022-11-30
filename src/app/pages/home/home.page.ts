import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  property_count: number = 0;
  properties: any = [];

  constructor(private api_service: ApiService) {}
  ngOnInit(): void {
    this.api_service.get_all_properties().subscribe((response)=>{
      console.log(response);
      this.property_count = response.body.count;
      this.properties = response.body.properties;
    },
    (error)=>{
      console.log(error);
    });
  }
  
}
